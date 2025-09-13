import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles, CheckCircle } from 'lucide-react';
import dentalHero1 from '@/assets/dental-hero-1.jpg';

const CosmeticDentistry = () => {
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
            <span className="text-foreground">Cosmetic Dentistry</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light to-background py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-primary mb-6">
              Cosmetic Dentistry
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your smile with our advanced cosmetic dental treatments. 
              Achieve the confident, beautiful smile you've always wanted.
            </p>
            <Button variant="hero" size="lg">Schedule Smile Makeover</Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="bg-background py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={dentalHero1} 
                alt="Beautiful smile after cosmetic dentistry" 
                className="rounded-2xl shadow-card w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Create Your Perfect Smile
              </h2>
              <p className="text-muted-foreground mb-8">
                Cosmetic dentistry combines artistry with advanced dental techniques to enhance 
                the appearance of your smile. Our treatments not only improve aesthetics but 
                can also boost your confidence and overall well-being.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Enhanced smile aesthetics</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Boosted self-confidence</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Natural-looking results</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Minimally invasive procedures</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cosmetic Services */}
      <section className="bg-muted py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Cosmetic Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced treatments to enhance your smile's beauty and appeal
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Sparkles className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Teeth Whitening</h3>
              <p className="text-muted-foreground">
                Professional whitening treatments for a brighter, more radiant smile.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Sparkles className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Porcelain Veneers</h3>
              <p className="text-muted-foreground">
                Ultra-thin shells that cover imperfections for a perfect smile.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Sparkles className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Smile Makeovers</h3>
              <p className="text-muted-foreground">
                Comprehensive treatments combining multiple procedures for dramatic results.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Sparkles className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Invisalign</h3>
              <p className="text-muted-foreground">
                Clear aligners that straighten teeth discreetly and comfortably.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Sparkles className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Gum Contouring</h3>
              <p className="text-muted-foreground">
                Reshape your gum line for better proportions and a more attractive smile.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Sparkles className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Bonding</h3>
              <p className="text-muted-foreground">
                Quick fixes for chips, gaps, and discoloration using composite materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready for Your Dream Smile?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let us help you achieve the beautiful, confident smile you deserve. 
            Schedule your cosmetic consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="consultation" size="lg">Book Smile Consultation</Button>
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

export default CosmeticDentistry;