
import { Card, CardContent } from '@/components/ui/card';

const Accommodations = () => {
  const accommodations = [
    {
      title: "Single Cottages",
      subtitle: "Intimate Retreat",
      count: "4 Available",
      description: "Thoughtfully designed for couples seeking privacy and connection with nature",
      features: [
        "King-size bed with premium linens",
        "En-suite bathroom with rainfall shower",
        "Private living area with panoramic views",
        "Outdoor verandah overlooking the reserve",
        "Climate control and mosquito protection"
      ],
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
      price: "From $150"
    },
    {
      title: "Family Cottages",
      subtitle: "Shared Entrance",
      count: "4 Available",
      description: "Perfect for families desiring togetherness while maintaining individual comfort",
      features: [
        "Two en-suite bedrooms",
        "Shared common lounge area",
        "Three private verandahs",
        "Single family entrance",
        "Wheelchair accessible options",
        "Adjoining room configurations"
      ],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
      price: "From $280"
    },
    {
      title: "Family Cottages",
      subtitle: "Dual Entrance",
      count: "2 Available",
      description: "Flexible accommodations offering privacy and independence for extended families",
      features: [
        "Two en-suite bedrooms",
        "Independent entrances",
        "Book together or separately",
        "Private verandahs for each unit",
        "Maximum flexibility",
        "Enhanced privacy options"
      ],
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
      price: "From $320"
    }
  ];

  return (
    <section id="accommodations" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">Accommodations</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 font-playfair">
            Refined Comfort<br />in the Wild
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Each cottage is a sanctuary of comfort, thoughtfully positioned to maximize 
            your connection with the surrounding wilderness while ensuring complete privacy.
          </p>
        </div>

        {/* Accommodations Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {accommodations.map((accommodation, index) => (
            <Card key={index} className="bg-white border-0 shadow-none overflow-hidden">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={accommodation.image}
                  alt={accommodation.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1">
                  <span className="text-xs uppercase tracking-[0.1em] text-gray-700">
                    {accommodation.count}
                  </span>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                    {accommodation.subtitle}
                  </p>
                  <h3 className="text-xl font-light text-gray-900 mb-3 font-playfair">
                    {accommodation.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light mb-4">
                    {accommodation.description}
                  </p>
                  <p className="text-lg font-light text-gray-900">
                    {accommodation.price}
                    <span className="text-sm text-gray-500 ml-1">per night</span>
                  </p>
                </div>
                <ul className="space-y-3">
                  {accommodation.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 font-light flex items-start">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Amenities */}
        <div className="bg-white p-12 max-w-5xl mx-auto">
          <h3 className="text-2xl font-light text-gray-900 mb-8 text-center font-playfair">
            Every Stay Includes
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-sm uppercase tracking-[0.1em] text-gray-900 mb-2 font-light">Wi-Fi Access</h4>
              <p className="text-xs text-gray-600 font-light">Lounge areas</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-[0.1em] text-gray-900 mb-2 font-light">Protection</h4>
              <p className="text-xs text-gray-600 font-light">Mosquito nets & repellents</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-[0.1em] text-gray-900 mb-2 font-light">Hot Water</h4>
              <p className="text-xs text-gray-600 font-light">24/7 availability</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-[0.1em] text-gray-900 mb-2 font-light">Housekeeping</h4>
              <p className="text-xs text-gray-600 font-light">Daily service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
