import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import BreedCard from "./components/BreedCard";

export default function App() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBreeds() {
      const res = await axios.get("https://dog.ceo/api/breeds/list/all");
      const breedNames = Object.keys(res.data.message).slice(0, 9);
      const breedData = await Promise.all(
        breedNames.map(async (breed) => {
          const imgRes = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
          return { name: breed, image: imgRes.data.message };
        })
      );
      setBreeds(breedData);
      setLoading(false);
    }
    fetchBreeds();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <About />

      <section id="breeds" className="container mx-auto p-6 flex-grow">
        {loading ? (
          <p className="text-center text-gray-500">Loading breeds...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {breeds.map((breed, i) => (
              <BreedCard key={i} {...breed} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
