import { useState, useEffect, useRef } from 'react';

export const useMobileServiceVisibility = (serviceCount: number) => {
  const [visibleService, setVisibleService] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Create refs for each service
  const serviceRefs = useRef<React.RefObject<HTMLAnchorElement>[]>(
    Array(serviceCount).fill(null).map(() => ({ current: null }))
  );

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const observers: IntersectionObserver[] = [];

    serviceRefs.current.forEach((ref, index) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            setVisibleService(index);
          } else if (!entry.isIntersecting && visibleService === index) {
            setVisibleService(null);
          }
        },
        {
          threshold: 0.6,
          rootMargin: '0px'
        }
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [isMobile, visibleService]);

  return {
    serviceRefs: serviceRefs.current,
    visibleService,
    isMobile
  };
};