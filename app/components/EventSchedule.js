import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const EventSchedule = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once
    });
  }, []);

  const schedule = [
    { time: "09:30 AM", event: "Arrival of KidPreneurs" },
    { time: "09:30 AM to 10:30 AM", event: "Setting up of stall" },
    { time: "10:35 AM", event: "KidPreneurs Assembly" },
    { time: "10:45 AM", event: "Group Photo" },
    { time: "11:00 AM", event: "Event starts" },
    { time: "1:00 PM to 1:30 PM", event: "Event Stops for Zuhr" },
    { time: "3:30 PM", event: "Event ends" },
    { time: "3:30 PM to 3:45 PM", event: "Clean up by participants" },
    { time: "3:45 PM to 4:00 PM", event: "Asr Prayers " },
    { time: "4:00 PM to 4:30 PM", event: "Participation Certificates" },
    { time: "4:30 PM to 4:45 PM", event: "Management Shields" },
  ];

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      {/* Heading Animation */}
      <h2
        className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-black opacity-0"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Event Schedule
      </h2>

      {/* Schedule List Animation */}
      <div className="relative shadow-lg shadow-black rounded-lg p-4 sm:p-6 lg:p-10">
        {schedule.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center mb-6 opacity-0 translate-y-10 transition-all"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // Stagger animation with delay
          >
            <div className="w-3 h-3 bg-yellow-600 rounded-full absolute left-0 -ml-1 sm:-ml-2"></div>
            <div className="pl-8 sm:pl-10 flex flex-col sm:flex-row justify-between w-full">
              <span className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-0">
                {item.event}
              </span>
              <span className="text-base sm:text-lg font-semibold text-gray-800">
                {item.time}
              </span>
            </div>
          </div>
        ))}
        {/* Vertical Line */}
        <div className="absolute border-l-2 sm:border-l-4 border-yellow-600 left-4 sm:left-1/2 top-0 bottom-0"></div>
      </div>
    </div>
  );
};

export default EventSchedule;
