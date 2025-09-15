import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Clock, User, Phone, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface BookingFormProps {
  trigger?: React.ReactNode;
  className?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ trigger, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: undefined as Date | undefined,
    time: '',
    treatment: ''
  });

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
  ];

  const treatments = [
    'General Dental Checkup',
    'Teeth Cleaning',
    'Dental Filling',
    'Root Canal Treatment',
    'Tooth Extraction',
    'Teeth Whitening',
    'Dental Crown',
    'Dental Implant',
    'Orthodontic Consultation',
    'Periodontal Treatment',
    'Other (Please specify in WhatsApp)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.treatment) {
      alert('Please fill in all fields');
      return;
    }

    const message = `Hello! I would like to book an appointment with the following details:

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📅 Date: ${format(formData.date, 'PPP')}
⏰ Time: ${formData.time}
🦷 Treatment: ${formData.treatment}

Please confirm my appointment. Thank you!`;

    const whatsappUrl = `https://wa.me/917207746777?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsOpen(false);
    setFormData({
      name: '',
      phone: '',
      date: undefined,
      time: '',
      treatment: ''
    });
  };

  const defaultTrigger = (
    <Button className={cn("bg-primary hover:bg-primary/90 text-primary-foreground", className)}>
      Book Appointment
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-primary mb-2">
            Book Your Appointment
          </DialogTitle>
          <p className="text-center text-muted-foreground">
            Fill in the details below and we'll connect you via WhatsApp
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-2 focus:border-primary"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="border-2 focus:border-primary"
              required
            />
          </div>

          {/* Date Field */}
          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-primary" />
              Appointment Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal border-2 hover:border-primary",
                    !formData.date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.date ? format(formData.date, "PPP") : "Select appointment date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={formData.date}
                  onSelect={(date) => setFormData({ ...formData, date })}
                  disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time Field */}
          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              Appointment Time
            </Label>
            <Select onValueChange={(value) => setFormData({ ...formData, time: value })}>
              <SelectTrigger className="border-2 focus:border-primary">
                <SelectValue placeholder="Select appointment time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Treatment Field */}
          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              Treatment Needed
            </Label>
            <Select onValueChange={(value) => setFormData({ ...formData, treatment: value })}>
              <SelectTrigger className="border-2 focus:border-primary">
                <SelectValue placeholder="Select treatment type" />
              </SelectTrigger>
              <SelectContent>
                {treatments.map((treatment) => (
                  <SelectItem key={treatment} value={treatment}>
                    {treatment}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-medium text-lg"
          >
            📱 Book Now
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
