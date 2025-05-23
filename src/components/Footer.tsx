
const Footer = () => {
  return (
    <footer className="bg-earth-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-playfair text-safari-200">
              Samburu Elephant Lodge
            </h3>
            <p className="text-earth-200 leading-relaxed mb-4">
              Experience authentic African luxury in the heart of Kenya's Samburu National Reserve, where wildlife roams free and cultural traditions thrive.
            </p>
            <p className="text-earth-300 text-sm">
              Committed to sustainable tourism and community development.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-safari-200">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-earth-200 hover:text-safari-200 transition-colors">About Us</a></li>
              <li><a href="#accommodations" className="text-earth-200 hover:text-safari-200 transition-colors">Accommodations</a></li>
              <li><a href="#experiences" className="text-earth-200 hover:text-safari-200 transition-colors">Experiences</a></li>
              <li><a href="#gallery" className="text-earth-200 hover:text-safari-200 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-earth-200 hover:text-safari-200 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-safari-200">
              Contact Information
            </h4>
            <div className="space-y-2 text-earth-200">
              <p>677 Samburu National Reserve</p>
              <p>Isiolo, 60300, Kenya</p>
              <p>Phone: +254 717 482 045</p>
              <p>WhatsApp: +254 796 099 657</p>
              <p>Email: info@samburuelephantlodge.co.ke</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-earth-700 mt-8 pt-8 text-center">
          <p className="text-earth-300">
            © 2024 Samburu Elephant Lodge. All rights reserved. | 
            <span className="ml-2">Sustainable Tourism • Wildlife Conservation • Community Development</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
