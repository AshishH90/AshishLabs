import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import FeaturedProjects from "../components/FeaturedProjects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;