// src/components/Hero.jsx
import React from "react";
import dogImage from "../assets/pexels-sebcomantravel-3631659.jpg";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[70vh] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${dogImage})` }}
    >
      <div className="bg-black/50 p-6 rounded-lg max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl mb-4">
          Discover the World of Dog Breeds
        </h1>
        <p className="text-lg md:text-xl">
          Explore unique traits, histories, and personalities of dogs from all
          around the globe. Find the perfect breed that matches your lifestyle
          and heart.
        </p>
      </div>
    </section>
  );
};

export default Hero;
