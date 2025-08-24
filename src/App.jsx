import React, { useState, useEffect } from 'react'
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/NavBar";
import LogoShowcase from './sections/LogoShowcase';
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Loader from "./components/Loader/Loader";
import Button1  from './components/Button/Button';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate some loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader onFinish={() => setIsLoading(false)} />;
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Button1 />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;