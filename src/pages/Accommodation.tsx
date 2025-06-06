
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from '@/components/ui/card';

const Accommodation = () => {
  const accommodations = [
    {
      title: "Simba",
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
      image: "/lovable-uploads/92cfc94f-80f8-41ef-bade-091186ea5ace.png"
    },
    {
      title: "Chui",
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
      image: "/lovable-uploads/609a7792-a922-4734-a8df-59852f0ed05e.png"
    },
    {
      title: "Tembo",
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
      image: "/lovable-uploads/ee4b0d52-e85a-4e07-b337-360f2f487f28.png"
    },
    {
      title: "Kifaru",
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
      image: "/lovable-uploads/659bf2a0-4859-4a60-bc13-d6d03cb00697.png"
    },
    {
      title: "Nyati",
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
      image: "/lovable-uploads/92cfc94f-80f8-41ef-bade-091186ea5ace.png"
    },
    {
      title: "Duma", 
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
      image: "/lovable-uploads/609a7792-a922-4734-a8df-59852f0ed05e.png"
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
      image: "/lovable-uploads/0fba290e-2f90-4159-8fa9-a1ee42ce6006.png"
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
      image: "/lovable-uploads/7ca574ad-4fab-422e-b0e8-19d05f205a0f.png"
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
      image: "/lovable-uploads/92cfc94f-80f8-41ef-bade-091186ea5ace.png"
    },
    {
      title: "Gerenuk Cottage",
      subtitle: "PWD Accessible Cottage",
      count: "2 Guests", 
      description: "Specially designed cottage being customized exclusively for persons with disabilities",
      features: [
        "Wheelchair accessible design",
        "Modified bathroom with safety features", 
        "Accessible shower and toilet facilities",
        "Wide doorways and ramps",
        "Special mobility equipment available",
        "Premium amenities adapted for accessibility",
        "Dedicated support staff available",
        "Free high-speed Wi-Fi"
      ],
      image: "/lovable-uploads/609a7792-a922-4734-a8df-59852f0ed05e.png"
    }
  ];

  const budgetAccommodation = [
    {
      title: "Budget Rooms",
      subtitle: "Shared Accommodation",
      count: "6-8 Guests per room",
      description: "Affordable shared accommodation perfect for students or large groups",
      features: [
        "Bunk beds with mosquito nets",
        "Shared bathroom facilities",
        "Basic toiletries provided",
        "Communal dining area",
        "Shared kitchen facilities",
        "Free Wi-Fi access",
        "Luggage storage available",
        "24/7 security"
      ],
      image: "/lovable-uploads/92cfc94f-80f8-41ef-bade-091186ea5ace.png"
    },
    {
      title: "Camping Ground",
      subtitle: "Bring Your Own Tent",
      count: "Unlimited",
      description: "Designated camping area for adventurous travelers with their own equipment",
      features: [
        "Designated camping plots",
        "Shared bathroom and shower facilities",
        "Fire pit areas for cooking",
        "Water points available",
        "Basic toiletries provided",
        "Security patrol throughout night",
        "Access to lodge dining (additional cost)",
        "Vehicle parking available"
      ],
      image: "/lovable-uploads/92cfc94f-80f8-41ef-bade-091186ea5ace.png"
    }
  ];

  const conferenceRoom = {
    title: "Conference & Meeting Facilities",
    description: "Professional meeting space perfect for corporate retreats, conferences, and special events",
    features: [
      "Capacity for up to 50 people",
      "Audio-visual equipment available",
      "High-speed Wi-Fi connectivity",
      "Air conditioning for comfort",
      "Catering services available",
      "Flexible seating arrangements",
      "Outdoor breakout spaces",
      "Stunning natural backdrop"
    ],
    image: "/lovable-uploads/92cfc94f-80f8-41ef-bade-091186ea5ace.png"
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-brown mb-4">Accommodation</p>
            <h1 className="text-4xl md:text-5xl font-light text-brand-brown mb-6 font-playfair">
              Luxury Tented Cottages<br />in the Wild
            </h1>
            <p className="text-lg text-brand-brown/80 leading-relaxed font-light">
              Each cottage is thoughtfully designed with solar-powered amenities, luxury toiletries, 
              and private outdoor spaces that immerse you in the natural beauty of Samburu while 
              ensuring complete comfort and privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Luxury Cottages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-brand-brown mb-12 text-center font-playfair">
            Luxury Cottages
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
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
        </div>
      </section>

      {/* Budget Accommodation */}
      <section className="py-20 bg-brand-cream/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-brand-brown mb-12 text-center font-playfair">
            Budget Accommodation
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {budgetAccommodation.map((accommodation, index) => (
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
        </div>
      </section>

      {/* Conference Room */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-brand-brown mb-12 text-center font-playfair">
            Conference & Event Facilities
          </h2>
          <Card className="max-w-4xl mx-auto bg-white border-0 shadow-lg overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2 relative h-96 lg:h-auto overflow-hidden">
                <img 
                  src={conferenceRoom.image}
                  alt={conferenceRoom.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-12">
                <h3 className="text-2xl font-light text-brand-brown mb-4 font-playfair">
                  {conferenceRoom.title}
                </h3>
                <p className="text-brand-brown/80 leading-relaxed font-light mb-6">
                  {conferenceRoom.description}
                </p>
                <ul className="space-y-3">
                  {conferenceRoom.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-brand-brown/80 font-light flex items-start">
                      <span className="w-2 h-2 bg-brand-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accommodation;
