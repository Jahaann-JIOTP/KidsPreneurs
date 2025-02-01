import React, { useState } from "react";

const Elearning = () => {
  const [activeTab, setActiveTab] = useState("session1"); // Default active tab

  const tabImages = {
    session1: [
      "/images/sessiongallery/31.jpeg",
      "/images/sessiongallery/new.jpeg",
      "/images/sessiongallery/33.jpeg",
      "/images/sessiongallery/34.jpeg",
      "/images/sessiongallery/new1.jpeg",
    ],
    session2: [
      "/images/sessiongallery/21.jpeg",
    ],
    session3: [
      "/images/sessiongallery/11.jpeg",
      "/images/sessiongallery/12.jpeg",
      "/images/sessiongallery/13.jpeg",
      "/images/sessiongallery/15.jpeg",
      "/images/sessiongallery/16.jpeg",
    ],
    session4: [
      "/images/sessiongallery/41.jpeg",
      "/images/sessiongallery/42.jpeg",
      // "/images/sessiongallery/43.jpeg",
     
      "/images/sessiongallery/45.jpeg",
      "/images/sessiongallery/46.jpeg",
      "/images/sessiongallery/44.jpeg",

    ],
  };

  return (
    <>
      <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
        Pre Event Training
      </h1>
      <div className="w-full max-w-6xl mx-auto mt-8">
        {/* Tabs */}
        <div className="flex flex-wrap border-b border-gray-300">
          {Object.keys(tabImages).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 flex-1 text-center text-sm sm:text-base ${activeTab === tab
                  ? "bg-black text-yellow-600 font-semibold"
                  : "bg-gray-200 text-gray-600 font-semibold"
                }`}
            >
              <span className="block">
                {tab.replace(/(\D+)(\d+)/, (_, word, number) => {
                  const status = tab === "session4" ? "Done" : "Done";
                  return `${word.charAt(0).toUpperCase() + word.slice(1)}_${number}`;
                })}
              </span>
              <span className="block text-xs sm:text-sm">
                {tab === "session4" ? "(Done)" : "(Done)"}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="md:row-span-2">
            <img
              className="w-full h-[400px] sm:h-60 lg:h-full object-fill rounded-lg"
              src={tabImages[activeTab][0]}
              alt="Brochure Image"
            />
          </div>
          {tabImages[activeTab].slice(1).map((src, index) => (
            <div key={index + 1}>
              <img
                className="w-full h-[350px] sm:h-40 lg:h-72 object-fill rounded-lg"
                src={src}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Elearning;
