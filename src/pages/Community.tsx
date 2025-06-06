
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Leaf, BookOpen } from 'lucide-react';

const Community = () => {
  const initiatives = [
    {
      title: "Simama Project Organisation",
      description: "Supporting vulnerable children and youth through education, safe housing, and life skills training.",
      icon: Heart,
      image: "/lovable-uploads/83c625bb-f478-4857-aa19-33737444d4e6.png",
      features: [
        "Educational sponsorships and scholarships",
        "Safe housing for street children",
        "Mental health and counseling support",
        "Leadership development programs"
      ]
    },
    {
      title: "Project Samburu",
      description: "Community-wide development initiatives focusing on sustainable growth and empowerment.",
      icon: Users,
      image: "/lovable-uploads/7bf2e565-a82b-4a3a-b39e-09a644ad96b9.png",
      features: [
        "Infrastructure development projects",
        "Women's empowerment programs",
        "Income-generating activities",
        "Community capacity building"
      ]
    },
    {
      title: "Conservation Efforts",
      description: "Protecting wildlife and preserving the ecosystem for future generations.",
      icon: Leaf,
      image: "/lovable-uploads/0808a2aa-6a3d-4233-b3b1-f0ad915c2478.png",
      features: [
        "Wildlife protection programs",
        "Habitat conservation initiatives",
        "Anti-poaching support",
        "Environmental education"
      ]
    },
    {
      title: "Cultural Preservation",
      description: "Maintaining and celebrating Samburu traditions and cultural heritage.",
      icon: BookOpen,
      image: "/lovable-uploads/1cda3e5b-d1d8-4f15-b3e3-3e71304c6843.png",
      features: [
        "Traditional craft workshops",
        "Cultural storytelling sessions",
        "Language preservation",
        "Youth cultural education"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-brown mb-4">Community & Conservancy</p>
            <h1 className="text-4xl md:text-5xl font-light text-brand-brown mb-6 font-playfair">
              Building Tomorrow Together
            </h1>
            <p className="text-lg text-brand-brown/80 leading-relaxed font-light">
              Your stay at Samburu Elephant Lodge directly supports community development and conservation efforts 
              that create lasting positive impact for the Samburu people and their environment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-orange text-white p-3 rounded-full">
                    <initiative.icon className="w-6 h-6" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-light text-brand-brown mb-4 font-playfair">
                    {initiative.title}
                  </h3>
                  <p className="text-brand-brown/80 leading-relaxed font-light mb-6">
                    {initiative.description}
                  </p>
                  <ul className="space-y-3">
                    {initiative.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-brand-brown/80 font-light flex items-start">
                        <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-brand-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-brand-brown mb-6 font-playfair">
              Your Impact in Numbers
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-3xl font-light text-brand-orange mb-2">150+</h3>
              <p className="text-brand-brown font-light">Children Supported</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-3xl font-light text-brand-orange mb-2">25</h3>
              <p className="text-brand-brown font-light">Families Empowered</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-3xl font-light text-brand-orange mb-2">5,000</h3>
              <p className="text-brand-brown font-light">Acres Protected</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-3xl font-light text-brand-orange mb-2">10</h3>
              <p className="text-brand-brown font-light">Community Projects</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
