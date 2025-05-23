
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair animate-fade-in">
          Samburu Elephant Lodge
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light animate-slide-in-left">
          Experience authentic African luxury in the heart of Kenya's Samburu National Reserve
        </p>
        <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Discover a world where elephants roam freely, cultural traditions thrive, and every moment offers an unforgettable safari adventure
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button className="btn-primary text-lg px-8 py-4">
            Book Your Stay
          </Button>
          <Button className="btn-secondary text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-earth-800">
            Explore Experiences
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
