import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, CheckCircle, MapPin, Clock, Mail } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import ServiceHeader from '@/components/ServiceHeader';
import ServiceFooter from '@/components/ServiceFooter';
import dentalAbout from '@/assets/dental-about.jpg';

const PreventiveDentistry = () => {
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
            <span className="text-foreground">Preventive Dentistry</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light to-background py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-primary mb-6">
              Preventive Dentistry
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Prevention is the best medicine. Our preventive dental care helps you 
              avoid serious dental problems before they start.
            </p>
            <Button variant="hero" size="lg">Schedule Prevention Visit</Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="bg-background py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={dentalAbout} 
                alt="Preventive dental care" 
                className="rounded-2xl shadow-card w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Prevention is Better Than Treatment
              </h2>
              <p className="text-muted-foreground mb-8">
                Preventive dentistry focuses on maintaining optimal oral health through 
                proactive care. Regular preventive treatments can help you avoid costly 
                and complex dental procedures in the future.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Early detection of dental issues</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Customized oral hygiene plans</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Professional cleaning and maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>Education on proper oral care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Services */}
      <section className="bg-muted py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Prevention Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive preventive care to keep your smile healthy
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Dental Cleanings</h3>
              <p className="text-muted-foreground">
                Professional cleanings every 6 months to remove plaque and tartar buildup.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Fluoride Treatments</h3>
              <p className="text-muted-foreground">
                Strengthening treatments to protect teeth against decay and cavities.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Dental Sealants</h3>
              <p className="text-muted-foreground">
                Protective barriers placed on back teeth to prevent cavities.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Oral Health Education</h3>
              <p className="text-muted-foreground">
                Personalized instruction on proper brushing, flossing, and oral care techniques.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Risk Assessment</h3>
              <p className="text-muted-foreground">
                Evaluation of your oral health risks to create customized prevention plans.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-foreground mb-4">Nutritional Counseling</h3>
              <p className="text-muted-foreground">
                Guidance on diet choices that promote healthy teeth and gums.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Start Your Prevention Journey Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't wait for problems to develop. Schedule your preventive care appointment 
            and keep your smile healthy for years to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="consultation" size="lg">Book Prevention Visit</Button>
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

export default PreventiveDentistry;
