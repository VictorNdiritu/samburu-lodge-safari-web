
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AccommodationPreview from "@/components/AccommodationPreview";
import ExperiencesPreview from "@/components/ExperiencesPreview";
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
      <AccommodationPreview />
      <ExperiencesPreview />
      <Gallery />
      <BlogPreview />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
