import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, CheckCircle, MapPin, Clock, Mail } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import ServiceHeader from '@/components/ServiceHeader';
import ServiceFooter from '@/components/ServiceFooter';
import dentalExam from '@/assets/dental-exam.jpg';

const PeriodontalCare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <ServiceHeader />

      {/* Breadcrumb */}
      <div className="bg-muted py-4 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-primary hover:underline">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/" className="text-primary hover:underline">Services</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Periodontal Care</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light to-background py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-primary mb-6">
              Periodontal Care
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Specialized treatment for gum disease and maintenance of healthy gums. 
              Protect the foundation of your smile with expert periodontal care.
            </p>
            <Button variant="hero" size="lg">Schedule Gum Health Evaluation</Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="bg-background py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Healthy Gums, Healthy Smile
              </h2>
              <p className="text-muted-foreground mb-8">
                Periodontal care focuses on the health of your gums and the supporting 
                structures of your teeth. Our specialized treatments help prevent, treat, 
                and manage gum disease to maintain optimal oral health.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Advanced gum disease treatment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Non-surgical therapy options</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Maintenance and prevention</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Improved overall health</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={dentalExam} 
                alt="Periodontal examination and treatment" 
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Periodontal Services */}
      <section className="bg-muted py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Periodontal Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive care for your gums and supporting tooth structures
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Heart className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Scaling & Root Planing</h3>
              <p className="text-muted-foreground">
                Deep cleaning procedure to remove bacteria and tartar below the gum line.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Heart className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Gum Disease Treatment</h3>
              <p className="text-muted-foreground">
                Comprehensive treatment plans for all stages of periodontal disease.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Heart className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Maintenance Therapy</h3>
              <p className="text-muted-foreground">
                Regular maintenance visits to prevent gum disease recurrence.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Heart className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Laser Therapy</h3>
              <p className="text-muted-foreground">
                Advanced laser treatment for gentle, effective gum disease management.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Heart className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Antibiotic Therapy</h3>
              <p className="text-muted-foreground">
                Targeted antibiotic treatment to eliminate harmful bacteria.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Heart className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Gum Grafting</h3>
              <p className="text-muted-foreground">
                Surgical procedures to restore gum tissue and protect exposed roots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Periodontal Health Matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Healthy gums are essential for overall health and well-being
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Prevent Tooth Loss</h3>
              <p className="text-muted-foreground">
                Healthy gums provide the foundation that keeps your teeth secure.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Better Overall Health</h3>
              <p className="text-muted-foreground">
                Gum health is linked to heart health and overall systemic wellness.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Fresh Breath</h3>
              <p className="text-muted-foreground">
                Healthy gums help prevent bad breath caused by bacterial infections.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Attractive Smile</h3>
              <p className="text-muted-foreground">
                Healthy, pink gums frame your teeth beautifully for an attractive smile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Take Control of Your Gum Health
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't ignore the warning signs of gum disease. Schedule your periodontal 
            evaluation today and protect your oral health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="consultation" size="lg">Book Gum Health Evaluation</Button>
            <Link to="/">
              <Button variant="outline" size="lg" className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary">
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
                  <span>Mon - Sat:</span>
                  <span>11:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>12:00 AM - 7:00 PM</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PeriodontalCare;
