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
<section className="bg-accent-pink py-16 px-4 rounded-b-[48px] md:px-8 lg:px-0">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-10">
      <span className="text-primary font-semibold block mb-1">Our Services</span>
      <h2 className="text-3xl md:text-4xl font-bold text-accent-pink-foreground mb-3">
        Transform Your Smile with Comprehensive Dental Services
      </h2>
    </div>
    <div className="space-y-0 divide-y divide-accent-pink-foreground/10 rounded-b-[48px] overflow-hidden">
      {[
        {
          title: "General Dentistry",
          tags: ["Dental Cleanings", "Coloured Filing", "Tooth Extractions"],
          link: "/services/general-dentistry",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=800&q=80",
        },
        {
          title: "Preventive Dentistry",
          tags: ["Fluoride Treatments", "Dental Sealants", "Oral Cancer Screenings"],
          link: "/services/preventive-dentistry",
          image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?fit=crop&w=800&q=80",
        },
        {
          title: "Restorative Dentistry",
          tags: ["Dental Crowns", "Dental Implants", "Root Canal"],
          link: "/services/restorative-dentistry",
          image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?fit=crop&w=800&q=80",
        },
        {
          title: "Cosmetic Dentistry",
          tags: ["Teeth Whitening", "Porcelain Veneers", "Smile Makeovers"],
          link: "/services/cosmetic-dentistry",
          image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?fit=crop&w=800&q=80",
        },
        {
          title: "Periodontal Care",
          tags: ["Scaling And Root Planing", "Periodontal Maintenance", "Gingival Grafting"],
          link: "/services/periodontal-care",
          image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?fit=crop&w=800&q=80",
        },
      ].map((service, idx) => (
        <Link
          to={service.link}
          key={service.title}
          className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-4 sm:px-8 py-8 bg-transparent transition-all duration-300 hover:bg-transparent focus:outline-none"
          style={{ minHeight: "90px" }}
        >
          {/* Overlay photo on hover */}
          <div
            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:brightness-90 transition-all duration-300 pointer-events-none rounded-2xl"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'opacity 0.3s, filter 0.3s',
            }}
            aria-hidden="true"
          ></div>
          {/* Service Title and Tags */}
          <div className="relative z-10 flex-1">
            <h3 className="text-lg md:text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white text-foreground">
              {service.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/80 text-primary text-xs md:text-sm font-medium backdrop-blur group-hover:bg-white/30 group-hover:text-white transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Right Arrow Button */}
          <div className="relative z-10 mt-6 sm:mt-0">
            <span className="flex items-center justify-center border-2 border-accent-pink-foreground group-hover:border-white rounded-full w-12 h-12 transition-all duration-300 group-hover:bg-white/30">
              <svg
                className="w-6 h-6 text-accent-pink-foreground group-hover:text-white transition-all duration-300"
                fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9 5l7 7-7 7"/>
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
    {/* View More Button */}
    <div className="flex justify-center mt-10">
      <button className="border rounded-full px-8 py-3 text-base flex items-center gap-3 bg-white/80 hover:bg-white focus:outline-none transition-all duration-200 text-accent-pink-foreground">
        View More Services
        <svg className="w-5 h-5"
             fill="none" stroke="currentColor" strokeWidth="2"
             viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
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
      {[
        {
          text: "I recently visited URS Dental for dental treatment and had a very positive experience. The staff was incredibly professional and courteous, making me feel comfortable throughout the visit.",
          name: "Jessy Manohar",
          role: "Patient",
          avatar: "JM",
          bgColor: "bg-orange-200",
          textColor: "text-orange-900"
        },
        {
          text: "I recently got a dental crown, and I'm thoroughly impressed! The procedure was smooth, and the result is fantastic. My crown looks and feels like a natural tooth. It's comfortable, and I can eat and drink without worry.",
          name: "Balaji Sharadha",
          role: "Practitioner",
          avatar: "BS",
          bgColor: "bg-blue-200",
          textColor: "text-blue-900"
        },
        {
          text: "I've been bringing my kids to Mavis for years, and we've always had positive experiences.",
          name: "John D.",
          role: "Hart Patient",
          avatar: "JD",
          bgColor: "bg-purple-200",
          textColor: "text-purple-900"
        },
        {
          text: "I recently had a dental emergency and was in a lot of pain. Mavis got me in right away and provided prompt, effective treatment.",
          name: "Mike L.",
          role: "Physician",
          avatar: "ML",
          bgColor: "bg-yellow-200",
          textColor: "text-yellow-900"
        },
        {
          text: "I used to dread going to the dentist until I found Mavis. The team here is incredibly friendly and professional.",
          name: "Emily W.",
          role: "Eye Patient",
          avatar: "EW",
          bgColor: "bg-green-200",
          textColor: "text-green-900"
        },
        {
          text: "As someone with dental anxiety, finding a dentist I trust was challenging. Thankfully, I found Mavis.",
          name: "Emma S.",
          role: "Doctor",
          avatar: "ES",
          bgColor: "bg-pink-200",
          textColor: "text-pink-900"
        }
      ].map((testimonial, i) => (
        <div key={i} className={`${testimonial.bgColor} rounded-2xl p-6 shadow-lg`}>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
              ))}
            </div>
          </div>
          <p className={`${testimonial.textColor} mb-6 font-medium leading-relaxed`}>
            {testimonial.text}
          </p>
          <div className="flex items-center">
            <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 shadow-md`}>
              <span className={`${testimonial.textColor} font-bold text-lg`}>
                {testimonial.avatar}
              </span>
            </div>
            <div>
              <div className={`font-bold ${testimonial.textColor} text-lg`}>
                {testimonial.name}
              </div>
              <div className={`text-sm ${testimonial.textColor} opacity-75`}>
                {testimonial.role}
              </div>
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
<footer className="bg-[#1B246B] text-white py-16 px-6 rounded-b-[50px]">
  <div className="container mx-auto">
    <div className="grid md:grid-cols-4 gap-10">
      {/* Contact Us Column */}
      <div className="space-y-4">
        <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
        <p className="text-sm leading-relaxed">
          Address: Flat No:302, Venkoti Building, Plot No:809, 60 Feet Rd, 
          near YSR Statue, Ayyappa Society, Mega Hills, Madhapur, 
          Hyderabad, Telangana 500081
        </p>
        <p className="text-sm">Phone: +91 9550552194</p>
        <p className="text-sm">Email: ursdental@mavis.com</p>
        
        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-6">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#1B246B] transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#1B246B] transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#1B246B] transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.742.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.986C24.007 5.367 18.641.001.012.001z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-[#1B246B] transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
        
        <a href="#" className="text-blue-400 hover:text-blue-300 mt-4 inline-flex items-center gap-2 text-sm transition-colors">
          Get Directions 
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Services Column */}
      <div className="space-y-4">
        <h3 className="text-white font-bold text-lg mb-6">Services</h3>
        <ul className="space-y-3 text-sm">
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Lab Tests</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Telemedicine Services</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Physical Rehabilitation</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Women's Health</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Urgent Care</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Telehealth Services</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Diagnostic Services</li>
        </ul>
      </div>

      {/* Our Practice Column */}
      <div className="space-y-4">
        <h3 className="text-white font-bold text-lg mb-6">Our Practice</h3>
        <ul className="space-y-3 text-sm">
          <li className="hover:text-blue-300 transition-colors cursor-pointer">About Us</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Appointment</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Contact Us</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Find A Location</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Doctors</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Our Services</li>
          <li className="hover:text-blue-300 transition-colors cursor-pointer">Doctor Search</li>
        </ul>
      </div>

      {/* Working Hours Column */}
      <div className="bg-[#E2F0D9] p-6 rounded-2xl text-[#1B246B]">
        <h3 className="text-2xl font-bold mb-6 text-[#1B246B]">Working Hours</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b border-[#B8D4A8] pb-3">
            <span className="font-semibold text-sm">Mon - Wed</span>
            <span className="text-sm">8:00 AM - 7:00 PM</span>
          </div>
          <div className="flex justify-between items-center border-b border-[#B8D4A8] pb-3">
            <span className="font-semibold text-sm">Thu</span>
            <span className="text-sm">8:00 AM - 5:00 PM</span>
          </div>
          <div className="flex justify-between items-center border-b border-[#B8D4A8] pb-3">
            <span className="font-semibold text-sm">Fri</span>
            <span className="text-sm">8:00 AM - 5:00 PM</span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="font-semibold text-sm">Sat - Sun</span>
            <span className="text-sm">8:00 AM - 4:00 PM</span>
          </div>
          
          <button className="w-full bg-[#1B246B] hover:bg-[#0f1a5c] text-white px-6 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-colors text-sm">
            Book A Visit 
            <div className="w-8 h-8 bg-[#0f1a5c] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Index;
