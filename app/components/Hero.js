"use client";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-[url('/images/eventgallery/3.webp')] bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 lg:px-8">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl pt-24 sm:pt-32 lg:pt-40 ">
        <h1 className="text-lg sm:text-4xl lg:text-5xl xl:text-6xl font-bold animate-fade-slide-up text-yellow-600">
          Welcome to KidPreneurs' Bazaar 2025 
        </h1>
        <p className="mt-2 text-sm sm:text-xl lg:text-2xl animate-fade-slide-up  text-yellow-600">(By HomeSchooling Community)</p>
        <p className="mt-2 text-sm sm:text-xl lg:text-2xl animate-fade-slide-up text-gray-300">
          Join us for an unforgettable experience where young entrepreneurs (5 to 16 Years)
          showcase their talents and creativity.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="#eventvenue">
          <button className="text-xs sm:text-md lg:text-lg animate-fade-slide-up mt-6 sm:mt-8 lg:mt-10 bg-transparent py-3 px-6 rounded-md border-2 border-yellow-600 text-white hover:bg-yellow-600 hover:text-white transition duration-300">
            Event Venue
          </button></Link>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="relative z-10 bg-white text-black p-4 sm:p-6 lg:p-8 mt-10 sm:mt-20 rounded-lg shadow-lg max-w-4xl flex flex-col sm:flex-row items-center justify-between w-full"
      >
        <div className="sm:w-2/3 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">About The Event</h2>
          <p className="text-base sm:text-lg">
            KidPreneurs' Bazaar is an event designed to inspire and empower
            young entrepreneurs. Experience a day filled with innovation,
            creativity, and fun!
          </p>
        </div>
        <div className="sm:w-1/3 sm:ml-6 mt-6 sm:mt-0 flex flex-col items-center sm:items-start">
          <div className="mb-4 text-center sm:text-left">
            <h3 className="text-2xl font-semibold">Where</h3>
            <p className="mt-2 text-gray-700">GHS Shuhada-e-APS, Model Town </p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold">When</h3>
            <p className="mt-2 text-gray-700">Feb 2nd, 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
