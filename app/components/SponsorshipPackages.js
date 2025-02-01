import React from "react";
import Link from "next/link";

const SponsorshipPackages = () => {
  const packages = [
    {
      name: "BRONZE",
      price: "15,000 PKR",
      features: [
        { text: "Logo/name on SMD screen.", included: true },
        { text: "Acknowledgment in announcements", included: true },
        { text: "Social media mentions", included: true },
        { text: "Promotional materials distribution", included: true },
        { text: "Complimentary stall space (Non-Premium Location)", included: false },
        { text: "Keynote address", included: false },
        { text: "Branding on participant certificates", included: false },
        { text: "Support event logistics", included: true },
        { text: "Exclusive press mentions", included: false },
      ],
    },
    {
      name: "SILVER",
      price: "40,000 PKR",
      features: [
        { text: "Logo/name on SMD screen.", included: true },
        { text: "Acknowledgment in announcements", included: true },
        { text: "Social media mentions", included: true },
        { text: "Promotional materials distribution", included: true },
        { text: "Complimentary stall space (Non-Premium Location)", included: true },
        { text: "Keynote address", included: false },
        { text: "Branding on participant certificates", included: false },
        { text: "Support event logistics", included: true },
        { text: "Exclusive press mentions", included: false },
      ],
    },
    {
      name: "GOLD",
      price: "75,000 PKR",
      features: [
        { text: "Logo/name on SMD screen.", included: true },
        { text: "Acknowledgment in announcements", included: true },
        { text: "Social media mentions", included: true },
        { text: "Promotional materials distribution", included: true },
        { text: "Complimentary stall space (Non-Premium Location)", included: true },
        { text: "Keynote address", included: true },
        { text: "Branding on participant certificates", included: true },
        { text: "Support event logistics", included: true },
        { text: "Exclusive press mentions", included: false },
      ],
    },
    {
      name: "PLATINUM",
      price: "1,00,000 PKR",
      features: [
        { text: "Logo/name on SMD screen.", included: true },
        { text: "Acknowledgment in announcements", included: true },
        { text: "Social media mentions", included: true },
        { text: "Promotional materials distribution", included: true },
        { text: "Complimentary stall space (Non-Premium Location)", included: true },
        { text: "Keynote address", included: true },
        { text: "Branding on participant certificates", included: true },
        { text: "Support event logistics", included: true },
        { text: "Exclusive press mentions", included: true },
      ],
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          Sponsorship Packages
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="bg-black border rounded-lg shadow-lg p-6 flex flex-col transform transition-transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-white text-center w-40 mx-auto uppercase tracking-wider py-2 rounded-md bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700">
                {pkg.name}
              </h3>
              <p className="mt-2 text-2xl font-extrabold text-yellow-500 text-center">
                {pkg.price}
              </p>
              <ul className="mt-4 space-y-2">
                {pkg.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-center ${
                      feature.included ? "text-white" : "text-gray-500"
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 mr-2 ${
                        feature.included ? "text-green-600" : "text-red-600"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {feature.included ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      )}
                    </svg>
                    {feature.text}
                  </li>
                ))}
              </ul>
             <Link href="#contact">
              <button className="mt-6 w-full bg-transparent text-yellow-600 border-2 border-yellow-600 py-2 px-4 rounded-lg hover:bg-yellow-600 hover:text-black">
                Select Package
              </button></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorshipPackages;
