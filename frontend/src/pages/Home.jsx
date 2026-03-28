import Navbar from "../components/Navbar";
import Hero3D from "../components/Hero3D";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import ReviewsSection from "./../components/ReviewsSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero3D />
      <Stats />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <ReviewsSection />
      <Footer />
    </main>
  );
}