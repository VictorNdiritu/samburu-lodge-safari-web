
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experiences = () => {
  const experiences = [
    {
      title: "Game Drives",
      description: "Explore the vast Samburu National Reserve in our comfortable 4WD vehicles with experienced guides",
      highlights: [
        "Morning and evening drives",
        "Professional safari guides",
        "Wildlife photography opportunities",
        "All-weather vehicles"
      ],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cultural Encounters",
      description: "Meet the Samburu people and learn about their rich traditions, customs, and way of life",
      highlights: [
        "Village visits with local guides",
        "Traditional dance performances",
        "Handicraft demonstrations",
        "Cultural storytelling sessions"
      ],
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Guided Nature Walks",
      description: "Discover the smaller wonders of the ecosystem on foot with our knowledgeable naturalists",
      highlights: [
        "Flora and fauna identification",
        "Bird watching opportunities",
        "Tracking and conservation insights",
        "Photography workshops"
      ],
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Birdwatching",
      description: "Spot over 350 bird species in one of Kenya's premier birding destinations",
      highlights: [
        "Expert ornithologist guides",
        "Early morning birding sessions",
        "Specialized equipment provided",
        "Rare species sightings"
      ],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Outdoor Dining",
      description: "Enjoy memorable meals under the African sky with views of the surrounding wilderness",
      highlights: [
        "Bush breakfast experiences",
        "Sunset dinner settings",
        "Traditional and international cuisine",
        "Private dining arrangements"
      ],
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "River Bar Experience",
      description: "Relax at our elevated bar with panoramic views and signature cocktails",
      highlights: [
        "Panoramic river views",
        "Signature cocktails and local beers",
        "Comfortable balcony seating",
        "Wildlife viewing opportunities"
      ],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-gradient-to-b from-earth-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-playfair">
            Unforgettable Experiences
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the wonders of Samburu through carefully curated activities that showcase the region's wildlife, culture, and natural beauty
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-white border-earth-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-earth-800 font-playfair">
                  {experience.title}
                </CardTitle>
                <p className="text-earth-600 leading-relaxed">
                  {experience.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {experience.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start text-earth-600">
                      <span className="text-primary mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-playfair">
              All-Inclusive Experience Packages Available
            </h3>
            <p className="text-lg leading-relaxed">
              Combine multiple activities with our specially designed packages that include accommodation, meals, and guided experiences for the ultimate Samburu adventure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
