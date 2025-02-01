import React from "react";
import { UserIcon } from '@heroicons/react/solid';

export default function EventMission() {
  return (
    <section className="m-4 sm:m-6 md:m-10 px-4 sm:px-6 py-8 sm:py-12 border-base-300 bg-gray-50">
      <div className="max-w-3xl container border-4 rounded-2xl shadow-lg shadow-black mx-auto text-center flex flex-col items-center bg-slate-100">
        {/* Heading */}
        <div className=" text-gray-800 hover:text-yellow-600 mb-8 py-10">
          <h1 className="text-2xl sm:text-xl md:text-4xl font-semibold text-gray-800 hover:text-yellow-600">Event Mission</h1>
          <h2 className="text-xl sm:text-sm md:text-2xl  text-gray-800 hover:text-yellow-600 ">
            Unleashing Creativity and Potential
          </h2>
        </div>

        {/* Description */}
        <ul className="list-none sm:text-base md:text-lg mx-4 p-3 sm:mx-10 text-left -mt-10">
          <li className="relative pl-6">
            <span className="absolute left-0 top-4 transform -translate-y-1/2 w-2 h-2 bg-yellow-600 rotate-45"></span>
            At the KidPreneurs' Bazaar, children aged 6 to 15 will experience
            the excitement of being business owners.
          </li>
          <li className="relative pl-6">
            <span className="absolute left-0 top-4 transform -translate-y-1/2 w-2 h-2 bg-yellow-600 rotate-45 "></span>
            They will learn trade and commerce in a dynamic, supportive
            environment.
          </li>
          <li className="relative pl-6">
            <span className="absolute left-0 top-4 transform -translate-y-1/2 w-2 h-2 bg-yellow-600 rotate-45 "></span>
            The event will provide them with a platform to showcase their
            talents, exchange products, and connect with peers and visitors.
          </li>
          <li className="relative pl-6">
            <span className="absolute left-0 top-4 transform -translate-y-1/2 w-2 h-2 bg-yellow-600 rotate-45 "></span>
            From handcrafted jewelry, innovative gadgets, and artwork to
            delightful homemade treats like cookies and candles, the bazaar will
            highlight the creativity and limitless potential of young
            entrepreneurs.
          </li>
          <li className="relative pl-6">
            <span className="absolute left-0 top-4 transform -translate-y-1/2 w-2 h-2 bg-yellow-600 rotate-45 "></span>
            The event aims to foster independence, confidence, and collaboration
            among the participants.
          </li>
        </ul>

        <br />

        {/* Age Group Icon */}
        <div className="flex flex-col items-center mt-4 space-y-2 mb-10">
          <UserIcon className="h-6 w-6 text-gray-800 hover:text-yellow-600" />
          <h5 className="text-base sm:text-lg md:text-xl text-gray-800 font-semibold">
            Age Group
          </h5>
          <p className="text-base sm:text-lg md:text-xl text-yellow-600 font-semibold">
            Open to Children aged 6 to 15 years.
          </p>
        </div>
      </div>
    </section>
  );
}

