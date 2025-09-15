import { useState, useEffect, useRef } from 'react';

export const useMobileServiceVisibility = (serviceCount: number) => {
  const [visibleServices, setVisibleServices] = useState<Set<number>>(new Set());
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
          if (entry.isIntersecting) {
            setVisibleServices(prev => new Set([...prev, index]));
          } else {
            setVisibleServices(prev => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        },
        {
          threshold: 0.1,
          rootMargin: '-50% 0px -10% 0px'
        }
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [isMobile]);

  return {
    serviceRefs: serviceRefs.current,
    visibleServices,
    isMobile
  };
};
