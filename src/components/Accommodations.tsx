
import { Card, CardContent } from '@/components/ui/card';

const Accommodations = () => {
  const accommodations = [
    {
      title: "Simba House",
      subtitle: "Family Cottage",
      count: "4 Guests",
      description: "Two interconnected bedrooms with luxurious amenities and Ewaso River views",
      features: [
        "1 King-size bed + 2 Queen-size beds with mosquito nets",
        "Indoor & outdoor solar-powered hot showers",
        "Luxurious outdoor bathtub with nature views",
        "Private veranda with outdoor bed seats & river view",
        "Family-size outdoor breakfast dining table",
        "Coffee area with premium tea & coffee amenities",
        "Complimentary high-speed WiFi",
        "Personal safe and luxury toiletries"
      ],
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Chui House",
      subtitle: "Family Cottage", 
      count: "4 Guests",
      description: "Two interconnected bedrooms designed for comfort and natural immersion",
      features: [
        "4 Queen-size beds with high-quality mosquito nets",
        "Indoor & outdoor solar-powered hot showers",
        "Cozy indoor seating and private veranda",
        "Family-size outdoor breakfast dining table",
        "Coffee area with electric kettle & premium amenities",
        "20L bottled water dispenser",
        "Ceiling fans for natural ventilation",
        "Hairdryer, iron box, and personal safe"
      ],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Tembo House",
      subtitle: "Family Cottage",
      count: "6 Guests", 
      description: "Three interconnected bedrooms perfect for larger families seeking luxury",
      features: [
        "1 King-size bed + 4 Queen-size beds",
        "Indoor & outdoor solar-powered hot showers",
        "Family-size outdoor breakfast dining with nature views",
        "Private veranda with outdoor seating",
        "Coffee area with premium amenities",
        "Complimentary high-speed WiFi",
        "Luxury toiletries and personal safe",
        "Ceiling fans and 20L water dispenser"
      ],
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Kifaru House",
      subtitle: "Family Cottage",
      count: "4 Guests",
      description: "Two interconnected bedrooms with premium comfort and stunning natural views",
      features: [
        "2 King-size beds with mosquito nets",
        "Indoor & outdoor solar-powered hot showers", 
        "Cozy indoor seating for privacy",
        "Family-size outdoor breakfast dining",
        "Private veranda with outdoor bed seats",
        "Coffee area with electric kettle",
        "Complimentary high-speed Wi-Fi",
        "Luxury toiletries and personal safe"
      ],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Nyati House",
      subtitle: "Family Cottage",
      count: "4 Guests", 
      description: "Two interconnected bedrooms offering comfort and tranquil natural surroundings",
      features: [
        "1 King-size bed + 2 Queen-size beds",
        "Indoor & outdoor solar-powered hot showers",
        "Private veranda with outdoor seating",
        "Family-size outdoor breakfast dining",
        "Coffee area with premium amenities",
        "20L bottled water dispenser",
        "Ceiling fans and luxury toiletries",
        "Complimentary high-speed Wi-Fi"
      ],
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Duma House", 
      subtitle: "Family Cottage",
      count: "6 Guests",
      description: "Three interconnected bedrooms with luxury amenities and outdoor bathtub",
      features: [
        "1 King-size bed + 4 Queen-size beds",
        "Indoor & outdoor solar-powered hot showers",
        "Luxurious outdoor bathtub with nature views", 
        "Private veranda with outdoor bed seats",
        "Family-size outdoor breakfast dining",
        "Coffee area with premium amenities",
        "Complimentary high-speed Wi-Fi",
        "Personal safe and luxury toiletries"
      ],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Beisa Oryx Cottage",
      subtitle: "Single Cottage",
      count: "2 Guests",
      description: "Intimate cottage perfect for couples with luxurious amenities and outdoor shower",
      features: [
        "Spacious King-size bed with mosquito net",
        "Indoor shower with uninterrupted hot water",
        "Invigorating open-air hot sun shower",
        "Indoor seating and outdoor bed seats",
        "Coffee area with electric kettle",
        "Premium tea & coffee amenities",
        "Locally sourced luxury toiletries",
        "Free high-speed Wi-Fi"
      ],
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Grevy Zebra Cottage", 
      subtitle: "Single Cottage",
      count: "2 Guests",
      description: "Romantic single cottage with modern amenities and natural surroundings",
      features: [
        "Spacious King-size bed with mosquito net",
        "Indoor shower with uninterrupted hot water",
        "Invigorating open-air hot sun shower",
        "Indoor seating and outdoor seating areas",
        "Coffee area with premium amenities",
        "20L bottled water dispenser", 
        "Locally sourced luxury toiletries",
        "Free high-speed Wi-Fi"
      ],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Somali Ostrich Cottage",
      subtitle: "Single Cottage", 
      count: "2 Guests",
      description: "Charming single cottage with outdoor bed seats and premium amenities",
      features: [
        "Spacious King-size bed with mosquito net",
        "Indoor shower with uninterrupted hot water",
        "Invigorating open-air hot sun shower", 
        "Indoor seating and outdoor bed seats",
        "Coffee area with electric kettle",
        "Premium tea & coffee amenities",
        "Locally sourced luxury toiletries",
        "Free high-speed Wi-Fi"
      ],
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Gerenuk Cottage",
      subtitle: "Single Cottage",
      count: "2 Guests", 
      description: "Intimate single cottage offering comfort and connection with natural surroundings",
      features: [
        "Spacious King-size bed with mosquito net",
        "Indoor shower with uninterrupted hot water", 
        "Invigorating open-air hot sun shower",
        "Indoor seating and outdoor seating areas",
        "Coffee area with premium amenities",
        "20L bottled water dispenser",
        "Locally sourced luxury toiletries", 
        "Free high-speed Wi-Fi"
      ],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="accommodations" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">Accommodations</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 font-playfair">
            Luxury Tented Villas<br />in the Wild
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Each villa is thoughtfully designed with solar-powered amenities, luxury toiletries, 
            and private outdoor spaces that immerse you in the natural beauty of Samburu while 
            ensuring complete comfort and privacy.
          </p>
        </div>

        {/* Accommodations Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 mb-20">
          {accommodations.map((accommodation, index) => (
            <Card key={index} className="bg-white border-0 shadow-none overflow-hidden hover:shadow-lg transition-all duration-300">
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
                </div>
                <ul className="space-y-3">
                  {accommodation.features.slice(0, 6).map((feature, featureIndex) => (
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
            Every Villa Includes
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-sm uppercase tracking-[0.1em] text-gray-900 mb-2 font-light">Solar Power</h4>
              <p className="text-xs text-gray-600 font-light">Eco-friendly energy</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-[0.1em] text-gray-900 mb-2 font-light">Outdoor Showers</h4>
              <p className="text-xs text-gray-600 font-light">Nature immersion</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-[0.1em] text-gray-900 mb-2 font-light">Butler Service</h4>
              <p className="text-xs text-gray-600 font-light">24/7 availability</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-[0.1em] text-gray-900 mb-2 font-light">Wi-Fi</h4>
              <p className="text-xs text-gray-600 font-light">High-speed connection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
