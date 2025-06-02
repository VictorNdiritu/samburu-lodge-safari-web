
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Accommodations', href: '#accommodations' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-light text-gray-900 font-playfair tracking-wide">
              Samburu Elephant Lodge
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm uppercase tracking-[0.1em] text-gray-700 hover:text-gray-900 transition-colors duration-300 font-light"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Reservation Button */}
          <div className="hidden lg:flex">
            <Button 
              variant="outline" 
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-2 text-xs uppercase tracking-[0.1em] font-light"
            >
              Reserve
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-gray-900">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                  <h2 className="text-xl font-light font-playfair">Menu</h2>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsOpen(false)}
                    className="text-gray-900"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-8 flex-1">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-2xl font-light text-gray-900 hover:text-gray-600 transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-8">
                    <Button className="bg-gray-900 text-white hover:bg-gray-800 w-full py-3 text-sm uppercase tracking-[0.1em]">
                      Make Reservation
                    </Button>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
