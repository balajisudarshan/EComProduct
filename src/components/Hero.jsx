import React from 'react';
import { useInView } from 'react-intersection-observer';
import hero1 from '../assets/hero.png'; // First image
import hero2 from '../assets/image.png'; // Second image
import hero3 from '../assets/hero1.png'; // Third image
import { Link } from 'react-router-dom';
import './styles/Hero.css';

const Hero = () => {
  return (
    <div className='heroContainer'>
      <HeroSection 
        title="Welcome to EcomShop" 
        text="Your one-stop shop for amazing products!" 
        buttonText="Shop Now" 
        buttonLink="/products" // Link for the button
        imageSrc={hero1} 
      />
      <HeroSection 
        title="Explore Our Groceries" 
        text="Discover unique items just for you!" 
        buttonText="Browse Groceries" 
        buttonLink="/groceries" // Link for the button
        imageSrc={hero2} 
        reverse 
      />
      <HeroSection 
        title="Explore Our Other Products" 
        text="Discover unique items just for you!" 
        buttonText="Browse Products" 
        buttonLink="/products" // Link for the button
        imageSrc={hero3} 
      />
    </div>
  );
};

const HeroSection = ({ title, text, buttonText, buttonLink, imageSrc, reverse }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <div 
      ref={ref} 
      className={`heroSection ${reverse ? 'reverse' : ''} ${inView ? 'animate' : ''}`}
    >
      <div className="content">
        <h1>{title}</h1>
        <p>{text}</p>
        <Link to={buttonLink}>
          <button>{buttonText}</button>
        </Link>
      </div>
      <div className="image">
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  );
};

export default Hero;
