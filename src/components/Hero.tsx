
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80 mb-4 font-light">
            Samburu National Reserve, Kenya
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 font-playfair leading-tight">
            Samburu<br />
            <span className="font-normal">Elephant Lodge</span>
          </h1>
        </div>
        
        <p className="text-lg md:text-xl font-light mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
          An intimate safari experience in the heart of Kenya's most pristine wilderness, 
          where authenticity meets refined comfort
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button className="bg-white text-black hover:bg-white/90 px-8 py-4 text-base font-normal tracking-wide uppercase">
            Make a Reservation
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-base font-normal tracking-wide uppercase bg-transparent"
          >
            Explore Experiences
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white">
        <div className="flex flex-col items-center cursor-pointer">
          <span className="text-xs uppercase tracking-[0.2em] mb-4 font-light">Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
