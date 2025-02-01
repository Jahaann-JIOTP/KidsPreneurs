// components/SponsorshipSection.js
import React from "react";
import Link from "next/link";

const Sponsors = () => {
  return (
    <>
      <section id="supporters" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800">
              Our Sponsors
            </h1>
          </div>
          <div className="flex justify-center items-center gap-8 md:gap-12 lg:gap-16 flex-wrap mt-12">
            {/* Sponsor 1 */}
            <div className="flex justify-center items-center group">
              <div className="w-72 sm:w-80 md:w-96 h-40 sm:h-48 md:h-56 flex justify-center items-center bg-white shadow-lg shadow-black rounded-lg p-4 sm:p-5 md:p-9 transition-transform duration-300 transform group-hover:scale-110">
              <Link href="https://jahaann.com/" target="_blank"rel="noopener noreferrer">
                <img
                  src="images/supporters/9.png"
                  className="max-w-full max-h-full object-contain"
                  alt="Sponsor 1"
                /></Link>
              </div>
            </div>
            {/* Sponsor 2 */}
            <div className="flex justify-center items-center group">
              <div className="w-72 sm:w-80 md:w-96 h-40 sm:h-48 md:h-56 flex justify-center items-center bg-white shadow-lg shadow-black rounded-lg p-4 sm:p-5 md:p-6 transition-transform duration-300 transform group-hover:scale-110">
              <Link href="http://sahamid.com/" target="_blank"rel="noopener noreferrer">
                <img
                  src="images/supporters/10.png"
                  className="max-w-full max-h-full object-contain"
                  alt="Sponsor 2"
                />
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center group">
              <div className="w-72 sm:w-80 md:w-96 h-40 sm:h-48 md:h-56 flex justify-center items-center bg-white shadow-lg shadow-black rounded-lg p-4 sm:p-5 md:p-6 transition-transform duration-300 transform group-hover:scale-110">
              <Link href="#" target="_blank"rel="noopener noreferrer">
                <img
                  src="images/supporters/0.png"
                  className="max-w-full max-h-full object-contain"
                  alt="Sponsor 1"
                /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
