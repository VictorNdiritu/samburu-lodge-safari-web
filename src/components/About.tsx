
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      title: "Conservation",
      description: "Committed to wildlife protection and ecosystem preservation in the Samburu landscape",
      image: "/lovable-uploads/0808a2aa-6a3d-4233-b3b1-f0ad915c2478.png"
    },
    {
      title: "Community",
      description: "Supporting local Samburu communities through meaningful partnerships and cultural exchange",
      image: "/lovable-uploads/83c625bb-f478-4857-aa19-33737444d4e6.png"
    },
    {
      title: "Authenticity",
      description: "Genuine safari experiences that honor the land and its people",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">About Us</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 font-playfair">
            Where Wilderness<br />Meets Wonder
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Nestled within the pristine Samburu National Reserve, our lodge represents 
            more than accommodation—it's a gateway to authentic Africa, where every 
            moment connects you to the raw beauty of Kenya's wilderness.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-6 font-playfair">
                Our Philosophy
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-light">
                Samburu Elephant Lodge exists at the intersection of luxury and responsibility. 
                We believe that exceptional hospitality should enhance, not diminish, the natural 
                world that surrounds us.
              </p>
              <p className="text-gray-600 leading-relaxed font-light">
                Here, in partnership with the local Samburu community, we've created a sanctuary 
                where travelers can experience the profound beauty of Kenya while contributing 
                to its preservation for generations to come.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/c0d96cbc-0f03-41fb-9005-5c5c061a8d15.png"
              alt="Welcome to Samburu Elephant Lodge"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-6 font-playfair">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed font-light mb-8">
                To be the leading eco-luxury safari destination in Kenya, setting the standard for 
                sustainable tourism while creating meaningful connections between travelers and 
                the Samburu community.
              </p>
              
              <h3 className="text-2xl font-light text-gray-900 mb-6 font-playfair">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                To provide exceptional safari experiences that celebrate Kenya's wildlife and 
                cultural heritage while directly contributing to conservation efforts and 
                community development through responsible tourism practices.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/83c625bb-f478-4857-aa19-33737444d4e6.png"
              alt="Our Mission and Vision"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <img 
                src={feature.image}
                alt={feature.title}
                className="w-full h-64 object-cover mb-8"
              />
              <h4 className="text-xl font-light text-gray-900 mb-4 font-playfair uppercase tracking-[0.1em]">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
