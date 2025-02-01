// components/Carousel.js

import { useEffect, useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/Cards/1.jpeg',
    '/Cards/2.jpeg',
    '/Cards/3.jpeg',
    '/Cards/4.jpeg',
    '/Cards/10.jpeg',
    '/Cards/6.jpeg',
    '/Cards/8.png',
    '/Cards/9.png',
    '/Cards/5.jpeg',
    '/Cards/14.jpeg',
    '/Cards/15.jpeg',
    '/Cards/16.jpeg',
    '/Cards/17.jpeg',
    '/Cards/18.jpeg',
    '/Cards/19.jpeg',
    '/Cards/20.jpeg',
    '/Cards/21.jpeg',
    '/Cards/22.jpeg',
    '/Cards/23.png',
    '/Cards/24.jpeg',
    '/Cards/25.jpeg',
    '/Cards/26.jpeg',
    '/Cards/27.jpeg',
    '/Cards/28.jpeg',
    '/Cards/29.jpeg',
    '/Cards/30.jpeg',
    '/Cards/31.jpeg',
    '/Cards/32.jpeg',
    '/Cards/33.jpeg',
    '/Cards/34.jpeg',
    '/Cards/35.jpeg',
    '/Cards/36.jpeg',
    '/Cards/37.jpeg',
    '/Cards/38.jpeg',
    '/Cards/39.jpeg',
    '/Cards/40.jpeg',
    '/Cards/11.jpeg',
    '/Cards/12.jpeg',
    '/Cards/13.jpeg',
    '/Cards/7.png',
    '/Cards/41.png',
    '/Cards/42.png',
    '/Cards/43.png',
    '/Cards/44.png',
    '/Cards/45.jpeg',
    '/Cards/46.jpeg',
    '/Cards/47.jpeg',
    '/Cards/48.jpeg',
    '/Cards/49.png',
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [images.length]);

  return (
    <>
    <div className="p-4 sm:px-8 lg:px-12 text-center xl:text-center font-sans">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
        KID'S Invitations & Activities (Happening Soon)
        </h2>
      </div><br></br>
    <div className='flex justify-center'>
      
    <div className="relative items-center w-[300px] sm:w-[400px] lg:w-[500px]  h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
    
      <div
        className="flex top-0 left-0  transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-[300px] sm:w-[400px] lg:w-[500px] flex-shrink-0  justify-center h-[500px] sm:h-[600px] lg:h-[700px] rounded-lg p-2 items-center">
            <img src={image} alt={`slide-${index}`} className="w-full h-full object-cover rounded-lg shadow-lg shadow-black" />
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};


export default Carousel;
