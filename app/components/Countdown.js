"use client";

import { useEffect, useState } from "react";

const Countdown = () => {
  const eventDate = new Date("February 2, 2025 00:00:00").getTime(); // Set the event date to February 2nd, 2025

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to update the time left
  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return;
    }

    setTimeLeft({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    });
  };

  useEffect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000); // Update every second
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-2 bg-black shadow-lg rounded-lg text-center">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-lg sm:text-xl lg:text-2xl">
        <div className="border-2 border-yellow-600 text-yellow-600 py-3 px-4 rounded-md flex flex-col items-center">
          <p className="text-6xl font-bold">{timeLeft.days}</p>
          <p className="mt-2">Days</p>
        </div>
        <div className="border-2 border-yellow-600 text-yellow-600 py-3 px-4 rounded-md flex flex-col items-center">
          <p className="text-6xl font-bold">{timeLeft.hours}</p>
          <p className="mt-2">Hours</p>
        </div>
        <div className="border-2 border-yellow-600 text-yellow-600 py-3 px-4 rounded-md flex flex-col items-center">
          <p className="text-6xl font-bold">{timeLeft.minutes}</p>
          <p className="mt-2">Minutes</p>
        </div>
        <div className="border-2 border-yellow-600 text-yellow-600 py-3 px-4 rounded-md flex flex-col items-center">
          <p className="text-6xl font-bold">{timeLeft.seconds}</p>
          <p className="mt-2">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
