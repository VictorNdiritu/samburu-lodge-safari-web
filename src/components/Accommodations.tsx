
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Accommodations = () => {
  const accommodations = [
    {
      title: "Single Cottages",
      count: "4 Available",
      description: "Perfect for couples seeking an intimate safari experience",
      features: [
        "Double bed with premium linens",
        "En-suite bathroom with hot shower",
        "Spacious living area with seating",
        "Private outdoor verandah",
        "Mosquito nets and fans",
        "Wi-Fi access in lounge area"
      ],
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
      price: "From $150/night"
    },
    {
      title: "Family Cottages (Single Entrance)",
      count: "4 Available",
      description: "Ideal for families wanting to stay together while enjoying privacy",
      features: [
        "Two en-suite bedrooms",
        "Common lounge area",
        "Three private verandahs",
        "Single entrance for family unity",
        "Wheelchair accessible options",
        "Adjoining room configurations"
      ],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
      price: "From $280/night"
    },
    {
      title: "Family Cottages (Dual Entrance)",
      count: "2 Available",
      description: "Flexible accommodations that can be booked together or separately",
      features: [
        "Two en-suite bedrooms",
        "Two separate entrances",
        "Individual or combined bookings",
        "Private verandahs for each unit",
        "Ideal for extended families",
        "Maximum privacy and flexibility"
      ],
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
      price: "From $320/night"
    }
  ];

  return (
    <section id="accommodations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-playfair">
            Luxurious Accommodations
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our thoughtfully designed cottages, each offering comfort, privacy, and stunning views of the Samburu landscape
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {accommodations.map((accommodation, index) => (
            <Card key={index} className="bg-white border-earth-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={accommodation.image}
                  alt={accommodation.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-white">
                  {accommodation.count}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-earth-800 font-playfair">
                  {accommodation.title}
                </CardTitle>
                <p className="text-earth-600">
                  {accommodation.description}
                </p>
                <div className="text-2xl font-bold text-primary">
                  {accommodation.price}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {accommodation.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-earth-600">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-earth-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-earth-800 mb-4 text-center font-playfair">
            All Accommodations Include
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="text-earth-600">
              <span className="block font-semibold">Wi-Fi Access</span>
              <span className="text-sm">In lounge areas</span>
            </div>
            <div className="text-earth-600">
              <span className="block font-semibold">Mosquito Protection</span>
              <span className="text-sm">Nets and repellents</span>
            </div>
            <div className="text-earth-600">
              <span className="block font-semibold">Hot Water</span>
              <span className="text-sm">24/7 availability</span>
            </div>
            <div className="text-earth-600">
              <span className="block font-semibold">Daily Housekeeping</span>
              <span className="text-sm">Premium service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
