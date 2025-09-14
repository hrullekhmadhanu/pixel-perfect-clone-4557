import { MapPin, Phone, Mail } from 'lucide-react';
import BookingForm from '@/components/BookingForm';

const ServiceFooter = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-[#1B246B] text-white py-16 px-6 rounded-b-[70px]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Contact Us Column */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
              <p className="text-sm leading-relaxed">
                314, Remedy Hospital Ln, MIG 1, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500072
              </p>
              <p className="text-sm">
                Phone: <a href="tel:+91 7207746777" className="hover:text-blue-300 transition-colors cursor-pointer">+91 7207746777</a>
              </p>
              <p className="text-sm">Email: info@smiledentist3.com</p>
              
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
              
              <a href="https://maps.app.goo.gl/3on61Ejxm3LrpS5U8?g_st=iw" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium text-sm transition-colors">
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
                
                <BookingForm 
                  trigger={
                    <button className="w-full bg-[#1B246B] hover:bg-[#0f1a5c] text-white px-6 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-colors text-sm">
                      Book A Visit 
                      <div className="w-8 h-8 bg-[#0f1a5c] rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Copyright Section */}
      <div className="bg-white py-4 px-6 border-t border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-gray-600 text-sm">
            © Smile Dentist3 All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <a href="/terms" className="text-gray-600 text-sm hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <a href="/legal" className="text-gray-600 text-sm hover:text-primary transition-colors">
              Legal Notice
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceFooter;