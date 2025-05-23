
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      title: "Eco-Friendly Practices",
      description: "Committed to sustainable tourism and environmental conservation in the Samburu ecosystem",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Community Engagement",
      description: "Supporting local Samburu communities through employment and cultural preservation initiatives",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Wildlife Conservation",
      description: "Located in the heart of Samburu National Reserve, contributing to wildlife protection efforts",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-earth-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-playfair">
            About Samburu Elephant Lodge
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Nestled in the pristine wilderness of Samburu National Reserve, our lodge offers an authentic African experience where luxury meets nature, and conservation meets hospitality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-earth-800 font-playfair">
              Our Story
            </h3>
            <p className="text-lg text-earth-600 leading-relaxed">
              Samburu Elephant Lodge stands as a testament to sustainable tourism and cultural preservation. Located within the breathtaking Samburu National Reserve, we've created a sanctuary where guests can experience the raw beauty of Kenya while contributing to conservation efforts and community development.
            </p>
            <p className="text-lg text-earth-600 leading-relaxed">
              Our commitment extends beyond providing exceptional accommodations. We work closely with the local Samburu community, ensuring that tourism benefits both wildlife conservation and the people who have called this land home for generations.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"
              alt="Lodge interior"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-earth-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-bold text-earth-800 mb-3 font-playfair">
                  {feature.title}
                </h4>
                <p className="text-earth-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
