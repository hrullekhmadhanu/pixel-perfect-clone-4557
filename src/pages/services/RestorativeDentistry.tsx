import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Wrench, CheckCircle } from 'lucide-react';
import dentalConsultation from '@/assets/dental-consultation.jpg';

const RestorativeDentistry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">URS Dental</div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
          <Button variant="primary">Book Appointment</Button>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-muted py-4 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-primary hover:underline">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/" className="text-primary hover:underline">Services</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Restorative Dentistry</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light to-background py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-primary mb-6">
              Restorative Dentistry
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Restore your teeth to their natural function and beauty with our 
              comprehensive restorative dental treatments.
            </p>
            <Button variant="hero" size="lg">Schedule Restoration Consultation</Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="bg-background py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Repair and Restore Your Smile
              </h2>
              <p className="text-muted-foreground mb-8">
                Restorative dentistry focuses on repairing and replacing damaged or missing 
                teeth. Our advanced techniques and materials ensure long-lasting, natural-looking 
                results that restore both function and aesthetics.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Natural-looking tooth restorations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Durable and long-lasting materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Restored chewing function</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Improved oral health</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={dentalConsultation} 
                alt="Restorative dentistry consultation" 
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Restoration Services */}
      <section className="bg-muted py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Restorative Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced treatments to restore your teeth's function and appearance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Wrench className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Dental Crowns</h3>
              <p className="text-muted-foreground">
                Custom-made caps that cover damaged teeth, restoring strength and appearance.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Wrench className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Dental Bridges</h3>
              <p className="text-muted-foreground">
                Replace missing teeth with permanent, natural-looking prosthetics.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Wrench className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Dental Fillings</h3>
              <p className="text-muted-foreground">
                Tooth-colored fillings that blend seamlessly with your natural teeth.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Wrench className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Dental Implants</h3>
              <p className="text-muted-foreground">
                Permanent tooth replacement that looks, feels, and functions like natural teeth.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Wrench className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Root Canal Therapy</h3>
              <p className="text-muted-foreground">
                Save infected teeth with gentle, effective root canal treatment.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Wrench className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Inlays & Onlays</h3>
              <p className="text-muted-foreground">
                Custom restorations for moderate tooth damage, preserving natural tooth structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Restore Your Smile?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't let damaged teeth affect your confidence. Schedule a consultation 
            to explore your restorative options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="consultation" size="lg">Book Consultation</Button>
            <Link to="/">
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <p>(555) 123-4567</p>
                <p>info@ursdental.com</p>
                <p>123 Dental Street, City, ST 12345</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <div className="space-y-3">
                <Link to="/services/general-dentistry" className="block hover:text-primary transition-colors">General Dentistry</Link>
                <Link to="/services/preventive-dentistry" className="block hover:text-primary transition-colors">Preventive Care</Link>
                <Link to="/services/cosmetic-dentistry" className="block hover:text-primary transition-colors">Cosmetic Dentistry</Link>
                <Link to="/services/restorative-dentistry" className="block hover:text-primary transition-colors">Restorative Care</Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <div className="space-y-3">
                <Link to="/" className="block hover:text-primary transition-colors">Home</Link>
                <Link to="/about" className="block hover:text-primary transition-colors">About Us</Link>
                <Link to="/services" className="block hover:text-primary transition-colors">Services</Link>
                <Link to="/contact" className="block hover:text-primary transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Working Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RestorativeDentistry;