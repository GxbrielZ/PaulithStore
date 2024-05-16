import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import TextBanner from '../Shared/TextBanner';
import Category from '../Category/Category';
import ProductSlider from '../Slider/ProductSlider';
import ProjectSection from '../ProjectSection/ProjectSection';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <TextBanner inputText='Tworzone z naturalnych kamieni i minerałów' />
        <Category />
        <TextBanner inputText='Spraw prezent sobie lub bliskim' />
        <ProductSlider />
        <TextBanner inputText='Masz własny pomysł na wymarzoną biżuterię?' />
        <ProjectSection />
        <TextBanner inputText='Skontaktuj się ze mną' />
        <Contact />
        <Footer />
    </div>
  );
};

export default Home;