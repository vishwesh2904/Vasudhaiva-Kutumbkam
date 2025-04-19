import React from 'react';
import gurujiImage from "../assets/guruji.jpg";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${gurujiImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="text-center bg-black bg-opacity-50 p-6 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold">Vasudhaiva Kutumbkam</h1>
          <p className="mt-4 text-xl md:text-2xl">The world is one family</p>
        </div>
      </motion.section>

      {/* Vision Section */}
      <section className="p-8 md:p-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Inspired by the timeless wisdom of sages and the universal principle of oneness, we strive to foster harmony, inner growth, and spiritual well-being.
        </p>
      </section>

      {/* Image Gallery Section */}
      <section className="px-6 md:px-20 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Explore the Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[image1, image2, image3].map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-[300px] object-cover" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
