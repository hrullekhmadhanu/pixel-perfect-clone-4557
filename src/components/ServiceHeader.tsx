import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, MapPin } from 'lucide-react';
import BookingForm from '@/components/BookingForm';

const ServiceHeader = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-green-100 py-3 px-6 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="text-green-800 text-sm mr-8">We understand that each patient is unique</span>
            <span className="flex items-center text-green-700 text-sm mr-8">
              <Phone className="w-4 h-4 mr-1" />
              <a href="tel:+91 7207746777" className="font-medium hover:text-green-900 transition-colors">
                +91 7207746777
              </a>
            </span>
            <span className="flex items-center text-green-700 text-sm mr-8">
              <MapPin className="w-4 h-4 mr-1" />
              Find Location
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .marquee-container {
          white-space: nowrap;
          overflow: hidden;
        }
        .marquee-content {
          display: inline-flex;
          align-items: center;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translate3d(40%, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }
        @media (max-width: 640px) {
          .marquee-content {
            animation: marquee 15s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translate3d(30%, 0, 0); }
            100% { transform: translate3d(-100%, 0, 0); }
          }
        }
      `}</style>

      {/* Header */}
      <header className="bg-background border-b border-border py-4 px-0 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo with minimal padding on mobile */}
          <div className="flex items-center">
            <img
              src="/logos.svg"
              alt="Smile Dentist3 Logo"
              className="h-8 md:h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
          <BookingForm 
            trigger={
              <Button 
                variant="primary" 
                className="text-xs md:text-sm px-2 md:px-4 py-2"
              >
                Book Appointment
              </Button>
            }
          />
        </div>
      </header>
    </>
  );
};

export default ServiceHeader;