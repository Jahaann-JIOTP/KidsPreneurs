import React from "react";

const EventVenue = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-black">
        Event Venue
      </h2>
      <div className="flex justify-center items-center p-6 flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
        {/* Google Map Embed */}
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-64 sm:h-80 md:h-96">
          <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4319.416133457215!2d74.3305981!3d31.486488499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190416d8ffffff%3A0xd45b500c8d94573!2sGHS%20Shuhada-e-APS%20Model%20Town!5e1!3m2!1sen!2s!4v1737203115147!5m2!1sen!2s"
            className="w-full h-full rounded-lg"
            loading="lazy"
          ></iframe>
        </div>

        {/* Location Details */}
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-64 sm:h-80 md:h-96 relative bg-[url('/venue1.jpg')] bg-cover bg-center rounded-lg">
          <div className="absolute inset-0 bg-slate-900 bg-opacity-70"></div>
          <div className="relative flex flex-col items-center justify-center mx-3 m:mx-4 lg:mx-5 h-full text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              GHS Shuhada-e-APS, Model Town Lahore
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-center">
              Join us at the GHS Shuhada-e-APS, Model Town Lahore, and immerse
              yourself in the charm of this exquisite location. Enjoy a day of
              vibrant activities, beautiful surroundings, and unforgettable
              memories!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventVenue;
