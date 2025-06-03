
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Heart } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "More Than a Safari: How Your Stay at Samburu Elephant Lodge Changes Lives",
    excerpt: "When you book a safari, you expect stunning wildlife, breathtaking landscapes, and luxury in the wild. At Samburu Elephant Lodge (SEL), you get all that — and something much deeper: the chance to be part of a powerful local story of transformation.",
    author: "SEL Team",
    date: "June 3, 2025",
    category: "Impact",
    image: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?auto=format&fit=crop&w=1200&q=80",
    readTime: "8 min read",
    isFeatured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "The Samburu Special Five: Wildlife You'll Only See Here",
      excerpt: "Discover the unique wildlife species that make Samburu National Reserve truly special - from the reticulated giraffe to the Grevy's zebra.",
      author: "Safari Guide Team",
      date: "March 15, 2024",
      category: "Wildlife",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Cultural Immersion: Learning from the Samburu People",
      excerpt: "Experience authentic cultural exchanges with the Samburu community, from traditional beadwork to warrior academy training.",
      author: "Cultural Experience Team",
      date: "March 10, 2024",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Sustainable Safari: Our Eco-Tourism Commitment",
      excerpt: "Learn how Samburu Elephant Lodge contributes to conservation efforts and empowers local communities through responsible tourism.",
      author: "Conservation Team",
      date: "March 5, 2024",
      category: "Conservation",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Best Time to Visit Samburu National Reserve",
      excerpt: "Planning your safari? Discover the optimal seasons for wildlife viewing, weather conditions, and unforgettable experiences.",
      author: "Travel Planning Team",
      date: "February 28, 2024",
      category: "Travel Tips",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=800&q=80",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Luxury Meets Wilderness: Our Tented Villa Experience",
      excerpt: "Step inside our beautifully appointed family cottages and single cottages, where comfort meets the wild heart of Kenya.",
      author: "Hospitality Team",
      date: "February 20, 2024",
      category: "Accommodation",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-brown mb-4">Blog</p>
            <h1 className="text-4xl md:text-5xl font-light text-brand-brown mb-6 font-playfair">
              Stories from the Wild
            </h1>
            <p className="text-lg text-brand-brown/80 leading-relaxed font-light">
              Discover insights, stories, and expertise from our team about wildlife, culture, 
              conservation, and the extraordinary experiences that await at Samburu Elephant Lodge.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Heart className="w-6 h-6 text-brand-orange mr-3" />
            <h2 className="text-2xl font-light text-brand-brown font-playfair">Featured Story</h2>
          </div>
          
          <Card className="max-w-5xl mx-auto bg-white border-0 shadow-lg overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2 relative h-96 lg:h-auto overflow-hidden">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-brand-orange text-white px-3 py-1">
                  <span className="text-xs uppercase tracking-[0.1em]">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="lg:w-1/2 p-12">
                <div className="flex items-center text-sm text-brand-brown/60 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {featuredPost.author}
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl font-light text-brand-brown mb-4 font-playfair leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-brand-brown/80 leading-relaxed font-light mb-6">
                  {featuredPost.excerpt}
                </p>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-brand-orange hover:text-brand-orange-dark font-light text-sm uppercase tracking-[0.1em]"
                >
                  Read Full Story <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-brand-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-brand-brown mb-4 font-playfair">More Stories</h2>
          </div>
          
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
                    <span className="text-xs uppercase tracking-[0.1em] text-brand-brown">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="p-8">
                  <div className="flex items-center text-sm text-brand-brown/60 mb-4 space-x-4">
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
                  <CardTitle className="text-xl font-light text-brand-brown mb-4 font-playfair leading-tight">
                    {post.title}
                  </CardTitle>
                  <p className="text-brand-brown/80 leading-relaxed font-light mb-6">
                    {post.excerpt}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-brand-orange hover:text-brand-orange-dark font-light text-sm uppercase tracking-[0.1em]"
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
              className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3 text-sm uppercase tracking-[0.1em] font-light"
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
