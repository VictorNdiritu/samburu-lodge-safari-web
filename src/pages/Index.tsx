
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Accommodations from "@/components/Accommodations";
import Experiences from "@/components/Experiences";
import Gallery from "@/components/Gallery";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Accommodations />
      <Experiences />
      <Gallery />
      <BlogPreview />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
