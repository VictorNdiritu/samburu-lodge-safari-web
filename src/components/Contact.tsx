
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Calendar, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const whatsappNumber = "+254796099657";
  const whatsappMessage = "Hello! I'm interested in booking a safari at Samburu Elephant Lodge. Could you please provide more information?";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-brand-cream/30 to-brand-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-brand-brown mb-6 font-playfair">
            Contact Us
          </h2>
          <p className="text-xl text-brand-brown/80 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to experience the magic of Samburu? Get in touch with us to plan your unforgettable safari adventure
          </p>
        </div>

        {/* WhatsApp Priority Section */}
        <div className="mb-16 text-center">
          <div className="bg-brand-orange text-white rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-light font-playfair">Quick Response via WhatsApp</h3>
            </div>
            <p className="text-lg mb-6 leading-relaxed opacity-90">
              Get instant booking assistance and personalized service. Chat with our team now!
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-brand-orange hover:bg-brand-cream px-8 py-3 rounded-lg font-medium text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white border-brand-cream/50 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-brand-brown font-playfair">
                  <MapPin className="mr-3 text-brand-orange" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-brown/80 leading-relaxed">
                  677 Samburu National Reserve<br />
                  Isiolo, 60300<br />
                  Kenya
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-brand-cream/50 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-brand-brown font-playfair">
                  <Phone className="mr-3 text-brand-orange" />
                  Contact Numbers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="bg-brand-orange/10 p-3 rounded-lg mb-3">
                  <p className="text-brand-brown font-medium">
                    <strong>WhatsApp (Preferred):</strong> 
                    <a href={whatsappUrl} className="text-brand-orange hover:text-brand-orange-dark ml-1">
                      +254 796 099 657
                    </a>
                  </p>
                </div>
                <p className="text-brand-brown/80">Kenya: +254 717 482 045</p>
                <p className="text-brand-brown/80">Kenya: +254 717 437 335</p>
                <p className="text-brand-brown/80">UK: +44 7377 308 560</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-brand-cream/50 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-brand-brown font-playfair">
                  <Clock className="mr-3 text-brand-orange" />
                  Reception Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-brown/80">7:30 AM - 11:00 PM Daily</p>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <p className="text-brand-brown/80">
                <strong>Email:</strong> info@samburuelephantlodge.co.ke
              </p>
              <p className="text-brand-brown/80">
                <strong>Reservations:</strong> reservations@samburuelephantlodge.co.ke
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white border-brand-cream/50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-brand-brown font-playfair">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-brand-brown font-medium mb-2">
                      First Name
                    </label>
                    <Input placeholder="Your first name" className="border-brand-cream" />
                  </div>
                  <div>
                    <label className="block text-brand-brown font-medium mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" className="border-brand-cream" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-brand-brown font-medium mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your.email@example.com" className="border-brand-cream" />
                </div>
                
                <div>
                  <label className="block text-brand-brown font-medium mb-2">
                    Phone
                  </label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" className="border-brand-cream" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-brand-brown font-medium mb-2">
                      Check-in Date
                    </label>
                    <Input type="date" className="border-brand-cream" />
                  </div>
                  <div>
                    <label className="block text-brand-brown font-medium mb-2">
                      Check-out Date
                    </label>
                    <Input type="date" className="border-brand-cream" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-brand-brown font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your safari dreams..."
                    className="min-h-32 border-brand-cream"
                  />
                </div>
                
                <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white w-full py-3 text-sm uppercase tracking-[0.1em]">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
