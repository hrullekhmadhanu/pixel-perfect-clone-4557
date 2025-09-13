import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, CheckCircle } from 'lucide-react';
import dentalHero1 from '@/assets/dental-hero-1.jpg';

const GeneralDentistry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Smile Dentist3</div>
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
            <span className="text-foreground">General Dentistry</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light to-background py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-primary mb-6">
              General Dentistry
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive dental care for the whole family. Our general dentistry services 
              focus on preventing oral health problems and maintaining your smile.
            </p>
            <Button variant="hero" size="lg">Schedule Consultation</Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="bg-background py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Complete Oral Health Care
              </h2>
              <p className="text-muted-foreground mb-8">
                General dentistry forms the foundation of oral health care. Our comprehensive 
                approach includes regular checkups, cleanings, and preventive treatments to 
                keep your teeth and gums healthy for life.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Regular dental checkups and examinations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Professional teeth cleaning and scaling</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Oral health education and prevention</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Early detection of dental problems</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={dentalHero1} 
                alt="General dentistry care" 
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="bg-muted py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Services Included in General Dentistry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our general dentistry services cover all aspects of oral health care
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Phone className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Regular Checkups</h3>
              <p className="text-muted-foreground">
                Comprehensive oral examinations to detect problems early and maintain optimal oral health.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Phone className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Professional Cleaning</h3>
              <p className="text-muted-foreground">
                Thorough cleaning to remove plaque and tartar buildup that regular brushing can't reach.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Phone className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Dental X-rays</h3>
              <p className="text-muted-foreground">
                Digital imaging to detect hidden dental problems and plan appropriate treatments.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Phone className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Fluoride Treatments</h3>
              <p className="text-muted-foreground">
                Protective fluoride applications to strengthen teeth and prevent decay.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Phone className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Oral Cancer Screening</h3>
              <p className="text-muted-foreground">
                Early detection screening for oral cancer as part of your regular checkup.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Phone className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Dental Sealants</h3>
              <p className="text-muted-foreground">
                Protective coatings for teeth to prevent cavities in hard-to-reach areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Schedule Your General Dentistry Appointment?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards optimal oral health. Book your comprehensive 
            dental checkup today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="consultation" size="lg">Book Appointment</Button>
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
                <p>+91 7207746777</p>
                <p>info@smiledentist3.com</p>
                <p>314, Remedy Hospital Ln, MIG 1, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500072</p>
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

export default GeneralDentistry;
