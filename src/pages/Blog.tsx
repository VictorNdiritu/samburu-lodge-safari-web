
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Samburu Special Five: Wildlife You'll Only See Here",
      excerpt: "Discover the unique wildlife species that make Samburu National Reserve truly special - from the reticulated giraffe to the Grevy's zebra.",
      author: "Safari Guide Team",
      date: "March 15, 2024",
      category: "Wildlife",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Cultural Immersion: Learning from the Samburu People",
      excerpt: "Experience authentic cultural exchanges with the Samburu community, from traditional beadwork to warrior academy training.",
      author: "Cultural Experience Team",
      date: "March 10, 2024",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Sustainable Safari: Our Eco-Tourism Commitment",
      excerpt: "Learn how Samburu Elephant Lodge contributes to conservation efforts and empowers local communities through responsible tourism.",
      author: "Conservation Team",
      date: "March 5, 2024",
      category: "Conservation",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Best Time to Visit Samburu National Reserve",
      excerpt: "Planning your safari? Discover the optimal seasons for wildlife viewing, weather conditions, and unforgettable experiences.",
      author: "Travel Planning Team",
      date: "February 28, 2024",
      category: "Travel Tips",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=800&q=80",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Luxury Meets Wilderness: Our Tented Villa Experience",
      excerpt: "Step inside our beautifully appointed family cottages and single cottages, where comfort meets the wild heart of Kenya.",
      author: "Hospitality Team",
      date: "February 20, 2024",
      category: "Accommodation",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Elephant Encounters: Respecting the Gentle Giants",
      excerpt: "Guidelines for responsible elephant viewing and the conservation efforts protecting these magnificent creatures in Samburu.",
      author: "Wildlife Conservation Team",
      date: "February 15, 2024",
      category: "Wildlife",
      image: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?auto=format&fit=crop&w=800&q=80",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-earth-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">Blog</p>
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 font-playfair">
              Stories from the Wild
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Discover insights, stories, and expertise from our team about wildlife, culture, 
              conservation, and the extraordinary experiences that await at Samburu Elephant Lodge.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1">
                    <span className="text-xs uppercase tracking-[0.1em] text-gray-700">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-light text-gray-900 mb-4 font-playfair leading-tight">
                    {post.title}
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed font-light mb-6">
                    {post.excerpt}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-gray-900 hover:text-gray-600 font-light text-sm uppercase tracking-[0.1em]"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 text-sm uppercase tracking-[0.1em] font-light"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
