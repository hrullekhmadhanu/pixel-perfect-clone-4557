import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, Users, Phone, MapPin, Clock, Mail } from 'lucide-react';
import dentalHero1 from '@/assets/dental-hero-1.jpg';
import dentalAbout from '@/assets/dental-about.jpg';
import dentalConsultation from '@/assets/dental-consultation.jpg';
import dentalExam from '@/assets/dental-exam.jpg';

const Index = () => {
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light to-background py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-primary mb-6 leading-tight">
              Gentle Dentistry for All Ages
              <span className="block text-2xl font-normal text-muted-foreground mt-2">
                - Your Smile, Our Priority
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Professional dental care with a gentle touch. We provide comprehensive 
              dental services in a comfortable, modern environment.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <Button variant="hero" size="lg">Book Consultation</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold">500+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="text-sm ml-2">Google Reviews</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={dentalHero1} 
              alt="Dental patient receiving gentle care" 
              className="rounded-2xl shadow-card w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center text-secondary-foreground">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Clinic Dentistry</h3>
              <p className="text-muted-foreground">
                Comprehensive dental care in our state-of-the-art clinic with advanced equipment
              </p>
            </div>
            <div className="text-center text-secondary-foreground">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Modern Equipment</h3>
              <p className="text-muted-foreground">
                Latest dental technology ensuring precise, comfortable treatments for all patients
              </p>
            </div>
            <div className="text-center text-secondary-foreground">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Open Communication</h3>
              <p className="text-muted-foreground">
                Clear communication and patient education throughout your dental journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-background py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={dentalAbout} 
                alt="Professional dental team" 
                className="rounded-2xl shadow-card w-full"
              />
            </div>
            <div>
              <span className="text-primary font-semibold">About Us</span>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Discover URS Dental: A Trusted Destination for Dental Excellence
              </h2>
              <p className="text-muted-foreground mb-8">
                At URS Dental, we combine years of experience with cutting-edge technology 
                to provide exceptional dental care. Our team of skilled professionals is 
                dedicated to ensuring your comfort and satisfaction.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <span>Experienced Team</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <span>Modern Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <span>Patient-Centered Care</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <span>Gentle Approach</span>
                </div>
              </div>
              <Button variant="primary" size="lg">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-accent-pink py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold">Our Services</span>
            <h2 className="text-4xl font-bold text-accent-pink-foreground mb-6">
              Transform Your Smile with Comprehensive Dental Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* General Dentistry */}
            <Link to="/services/general-dentistry" className="group">
              <div className="bg-background rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">General Dentistry</h3>
                <p className="text-muted-foreground">
                  Comprehensive dental care including checkups, cleanings, and preventive treatments for optimal oral health.
                </p>
              </div>
            </Link>

            {/* Preventive Dentistry */}
            <Link to="/services/preventive-dentistry" className="group">
              <div className="bg-background rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Preventive Dentistry</h3>
                <p className="text-muted-foreground">
                  Proactive care to prevent dental issues before they start, including cleanings and fluoride treatments.
                </p>
              </div>
            </Link>

            {/* Restorative Dentistry */}
            <Link to="/services/restorative-dentistry" className="group">
              <div className="bg-background rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Restorative Dentistry</h3>
                <p className="text-muted-foreground">
                  Restore damaged teeth with crowns, bridges, fillings, and other advanced restorative procedures.
                </p>
              </div>
            </Link>

            {/* Cosmetic Dentistry */}
            <Link to="/services/cosmetic-dentistry" className="group">
              <div className="bg-background rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Cosmetic Dentistry</h3>
                <p className="text-muted-foreground">
                  Enhance your smile with veneers, teeth whitening, and other cosmetic treatments.
                </p>
              </div>
            </Link>

            {/* Periodontal Care */}
            <Link to="/services/periodontal-care" className="group">
              <div className="bg-background rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Periodontal Care</h3>
                <p className="text-muted-foreground">
                  Specialized treatment for gum disease and maintenance of healthy gums and supporting structures.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="bg-gradient-to-br from-accent-purple to-accent-purple-light py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-accent-purple-foreground">
              <span className="text-accent-purple-foreground/80 font-semibold">Free Consultation</span>
              <h2 className="text-4xl font-bold mb-6">
                Book Your Free Consultation Today
              </h2>
              <p className="text-accent-purple-foreground/90 mb-8 text-lg">
                Schedule a complimentary consultation with our experienced dental team. 
                We'll assess your oral health and discuss the best treatment options for you.
              </p>
              <Button variant="consultation" size="lg">Schedule Consultation</Button>
            </div>
            <div className="relative">
              <img 
                src={dentalConsultation} 
                alt="Dental consultation" 
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-background py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold">Testimonials</span>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Experiences Shared by Our Customers
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-card">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-card-foreground mb-4">
                  "Excellent dental care! The team is professional, gentle, and made me feel comfortable throughout my treatment."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">JD</span>
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">John Doe</div>
                    <div className="text-sm text-muted-foreground">Verified Patient</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-accent-blue to-blue-600 py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-accent-blue-foreground">
              <h2 className="text-4xl font-bold mb-6">
                Schedule Your Dental Exam with Us!
              </h2>
              <p className="text-accent-blue-foreground/90 mb-8 text-lg">
                Don't wait to take care of your oral health. Book your appointment today 
                and experience the difference of gentle, professional dental care.
              </p>
              <Button variant="cta" size="lg">Book Your Exam Now</Button>
            </div>
            <div className="relative">
              <img 
                src={dentalExam} 
                alt="Dental examination" 
                className="rounded-2xl shadow-card w-full"
              />
            </div>
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
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>123 Dental Street, City, ST 12345</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@ursdental.com</span>
                </div>
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
              <h3 className="text-xl font-bold mb-6">Our Practice</h3>
              <div className="space-y-3">
                <a href="#" className="block hover:text-primary transition-colors">About Us</a>
                <a href="#" className="block hover:text-primary transition-colors">Our Team</a>
                <a href="#" className="block hover:text-primary transition-colors">Technology</a>
                <a href="#" className="block hover:text-primary transition-colors">Patient Reviews</a>
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
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground">© 2024 URS Dental. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;