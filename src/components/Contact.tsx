
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Calendar, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-earth-50 to-earth-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-playfair">
            Contact Us
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Ready to experience the magic of Samburu? Get in touch with us to plan your unforgettable safari adventure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white border-earth-200">
              <CardHeader>
                <CardTitle className="flex items-center text-earth-800 font-playfair">
                  <MapPin className="mr-3 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-earth-600 leading-relaxed">
                  677 Samburu National Reserve<br />
                  Isiolo, 60300<br />
                  Kenya
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-earth-200">
              <CardHeader>
                <CardTitle className="flex items-center text-earth-800 font-playfair">
                  <Phone className="mr-3 text-primary" />
                  Contact Numbers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-earth-600">Kenya: +254 717 482 045</p>
                <p className="text-earth-600">Kenya: +254 717 437 335</p>
                <p className="text-earth-600">WhatsApp: +254 796 099 657</p>
                <p className="text-earth-600">UK: +44 7377 308 560</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-earth-200">
              <CardHeader>
                <CardTitle className="flex items-center text-earth-800 font-playfair">
                  <Clock className="mr-3 text-primary" />
                  Reception Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-earth-600">7:30 AM - 11:00 PM Daily</p>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <p className="text-earth-600">
                <strong>Email:</strong> info@samburuelephantlodge.co.ke
              </p>
              <p className="text-earth-600">
                <strong>Reservations:</strong> reservations@samburuelephantlodge.co.ke
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white border-earth-200">
            <CardHeader>
              <CardTitle className="text-earth-800 font-playfair">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-earth-700 font-medium mb-2">
                      First Name
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-earth-700 font-medium mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-earth-700 font-medium mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="block text-earth-700 font-medium mb-2">
                    Phone
                  </label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-earth-700 font-medium mb-2">
                      Check-in Date
                    </label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-earth-700 font-medium mb-2">
                      Check-out Date
                    </label>
                    <Input type="date" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-earth-700 font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your safari dreams..."
                    className="min-h-32"
                  />
                </div>
                
                <Button className="btn-primary w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-playfair">
              Ready to Book Your Safari?
            </h3>
            <p className="text-lg mb-6 leading-relaxed">
              Contact us directly via WhatsApp for instant booking assistance and personalized service
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-medium">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
