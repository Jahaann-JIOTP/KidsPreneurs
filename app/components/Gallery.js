"use client";

import { useState } from "react";
import Image from "next/image";

const galleryItems = [
    { src: "/images/eventgallery/1.jpg", alt: "Gallery Image 1" },
    { src: "/images/eventgallery/2.jpg", alt: "Gallery Image 2" },
    { src: "/images/eventgallery/3.jpg", alt: "Gallery Image 3" },
    { src: "/images/eventgallery/4.jpg", alt: "Gallery Image 4" },
    { src: "/images/eventgallery/5.jpg", alt: "Gallery Image 5" },
    { src: "/images/eventgallery/6.jpg", alt: "Gallery Image 6" },
    { src: "/images/eventgallery/7.jpg", alt: "Gallery Image 7" },
    { src: "/images/eventgallery/8.jpg", alt: "Gallery Image 8" },
    { src: "/images/eventgallery/9.jpg", alt: "Gallery Image 9" },
    { src: "/images/eventgallery/10.jpg", alt: "Gallery Image 10" },
    { src: "/images/eventgallery/15.jpg", alt: "Gallery Image 11" },
    { src: "/images/eventgallery/12.jpg", alt: "Gallery Image 12" },
    { src: "/images/eventgallery/13.jpg", alt: "Gallery Image 13" },
    { src: "/images/eventgallery/14.jpg", alt: "Gallery Image 14" },
    { src: "/images/eventgallery/11.jpg", alt: "Gallery Image 15" },
    { src: "/images/eventgallery/16.jpg", alt: "Gallery Image 16" },
    { src: "/images/eventgallery/17.jpg", alt: "Gallery Image 17" },
    { src: "/images/eventgallery/18.jpg", alt: "Gallery Image 18" },
    { src: "/images/eventgallery/19.jpg", alt: "Gallery Image 19" },
    { src: "/images/eventgallery/20.jpg", alt: "Gallery Image 20" },
    { src: "/images/eventgallery/21.jpg", alt: "Gallery Image 21" },
    { src: "/images/eventgallery/23.jpg", alt: "Gallery Image 23" },
    { src: "/images/eventgallery/24.jpg", alt: "Gallery Image 24" },
    { src: "/images/eventgallery/25.jpg", alt: "Gallery Image 25" },
    { src: "/images/eventgallery/27.jpg", alt: "Gallery Image 27" },
    { src: "/images/eventgallery/30.jpg", alt: "Gallery Image 30" },
    { src: "/images/eventgallery/32.jpg", alt: "Gallery Image 32" },
    { src: "/images/eventgallery/33.jpg", alt: "Gallery Image 33" },
    { src: "/images/eventgallery/34.jpg", alt: "Gallery Image 34" },
    { src: "/images/eventgallery/35.jpg", alt: "Gallery Image 35" },
    { src: "/images/eventgallery/36.jpg", alt: "Gallery Image 36" },
    { src: "/images/eventgallery/37.jpg", alt: "Gallery Image 37" },
    { src: "/images/eventgallery/38.jpg", alt: "Gallery Image 38" },
    { src: "/images/eventgallery/39.jpg", alt: "Gallery Image 39" },
    { src: "/images/eventgallery/40.jpg", alt: "Gallery Image 40" },
    { src: "/images/eventgallery/41.jpg", alt: "Gallery Image 41" },
    { src: "/images/eventgallery/42.jpg", alt: "Gallery Image 42" },
    { src: "/images/eventgallery/43.jpg", alt: "Gallery Image 43" },
    { src: "/images/eventgallery/44.jpg", alt: "Gallery Image 44" },
    { src: "/images/eventgallery/45.jpg", alt: "Gallery Image 45" },
    { src: "/images/eventgallery/46.jpg", alt: "Gallery Image 46" },
    { src: "/images/eventgallery/47.jpg", alt: "Gallery Image 47" },
    { src: "/images/eventgallery/48.jpg", alt: "Gallery Image 48" },
    { src: "/images/eventgallery/49.jpg", alt: "Gallery Image 49" },
    { src: "/images/eventgallery/50.jpg", alt: "Gallery Image 50" },
    { src: "/images/eventgallery/51.jpg", alt: "Gallery Image 51" },
    { src: "/images/eventgallery/52.jpg", alt: "Gallery Image 52" },
    { src: "/images/eventgallery/53.jpg", alt: "Gallery Image 53" },
    { src: "/images/eventgallery/54.jpg", alt: "Gallery Image 54" },
    { src: "/images/eventgallery/55.jpg", alt: "Gallery Image 55" },
    { src: "/images/eventgallery/56.jpg", alt: "Gallery Image 56" },
    { src: "/images/eventgallery/57.jpg", alt: "Gallery Image 57" },
    { src: "/images/eventgallery/58.jpg", alt: "Gallery Image 58" },
    { src: "/images/eventgallery/59.jpg", alt: "Gallery Image 59" },
    { src: "/images/eventgallery/60.jpg", alt: "Gallery Image 60" },
    { src: "/images/eventgallery/61.jpg", alt: "Gallery Image 61" },
    { src: "/images/eventgallery/62.jpg", alt: "Gallery Image 62" },
    { src: "/images/eventgallery/63.jpg", alt: "Gallery Image 63" },
    { src: "/images/eventgallery/64.jpg", alt: "Gallery Image 64" },
    { src: "/images/eventgallery/65.jpg", alt: "Gallery Image 65" },
    { src: "/images/eventgallery/66.jpg", alt: "Gallery Image 66" },
    { src: "/images/eventgallery/67.jpg", alt: "Gallery Image 67" },
    { src: "/images/eventgallery/68.jpg", alt: "Gallery Image 68" },
    { src: "/images/eventgallery/69.jpg", alt: "Gallery Image 69" },
    { src: "/images/eventgallery/70.jpg", alt: "Gallery Image 70" },
    { src: "/images/eventgallery/71.jpg", alt: "Gallery Image 71" },
    { src: "/images/eventgallery/72.jpg", alt: "Gallery Image 72" },
    { src: "/images/eventgallery/73.jpg", alt: "Gallery Image 73" },
    { src: "/images/eventgallery/74.jpg", alt: "Gallery Image 74" },
    { src: "/images/eventgallery/75.jpg", alt: "Gallery Image 75" },
    { src: "/images/eventgallery/76.jpg", alt: "Gallery Image 76" },
    { src: "/images/eventgallery/77.jpg", alt: "Gallery Image 77" },
    { src: "/images/eventgallery/78.jpg", alt: "Gallery Image 78" },
    { src: "/images/eventgallery/79.jpg", alt: "Gallery Image 79" },
    { src: "/images/eventgallery/80.jpg", alt: "Gallery Image 80" },
    { src: "/images/eventgallery/81.jpg", alt: "Gallery Image 81" },
    { src: "/images/eventgallery/82.jpg", alt: "Gallery Image 82" },
    { src: "/images/eventgallery/83.jpg", alt: "Gallery Image 83" },
    { src: "/images/eventgallery/84.jpg", alt: "Gallery Image 84" },
    { src: "/images/eventgallery/85.jpg", alt: "Gallery Image 85" },
    { src: "/images/eventgallery/86.jpg", alt: "Gallery Image 86" },
    { src: "/images/eventgallery/87.jpg", alt: "Gallery Image 87" },
    { src: "/images/eventgallery/88.jpg", alt: "Gallery Image 88" },
    { src: "/images/eventgallery/89.jpg", alt: "Gallery Image 89" },
    { src: "/images/eventgallery/90.jpg", alt: "Gallery Image 90" },
    { src: "/images/eventgallery/91.jpg", alt: "Gallery Image 91" },
    { src: "/images/eventgallery/92.jpg", alt: "Gallery Image 92" },
    { src: "/images/eventgallery/93.jpg", alt: "Gallery Image 93" },
    { src: "/images/eventgallery/94.jpg", alt: "Gallery Image 94" },
    { src: "/images/eventgallery/95.jpg", alt: "Gallery Image 95" },
    { src: "/images/eventgallery/96.jpg", alt: "Gallery Image 96" },
    { src: "/images/eventgallery/97.jpg", alt: "Gallery Image 97" },
    { src: "/images/eventgallery/98.jpg", alt: "Gallery Image 98" },
    { src: "/images/eventgallery/99.jpg", alt: "Gallery Image 99" },
    { src: "/images/eventgallery/100.jpg", alt: "Gallery Image 100" },
    { src: "/images/eventgallery/101.jpg", alt: "Gallery Image 101" },
    { src: "/images/eventgallery/102.jpg", alt: "Gallery Image 102" },

];

const Gallery = () => {
    const [isAllImagesOpen, setIsAllImagesOpen] = useState(false);
    const [isSingleImageOpen, setIsSingleImageOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(null);

    const openAllImages = () => {
        setIsAllImagesOpen(true);
    };

    const closeAllImages = () => {
        setIsAllImagesOpen(false);
        setIsSingleImageOpen(false); // Close single image modal if open
    };

    const openSingleImage = (index) => {
        setCurrentImageIndex(index);
        setIsSingleImageOpen(true);
    };

    const closeSingleImage = () => {
        setIsSingleImageOpen(false);
    };

    const showNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    const showPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="py-12 bg-gray-50">
            <h2 className="text-3xl md:text-5xl font-semibold text-center text-gray-800 mb-9">
                Gallery
            </h2>

            {/* Display Limited Images */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-5 sm:p-10 gap-4 mx-auto w-full max-w-6xl justify-center sm:px-4">
                {galleryItems.slice(0, 15).map((item, index) => (
                    <div key={index} className="mx-auto">
                        <div className="relative">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={200}
                                height={200}
                                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
                                onClick={() => openSingleImage(index)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Explore All Images Button */}
            <div className="text-center mt-8">
                <button
                    onClick={openAllImages}
                    className="px-6 py-2 bg-yellow-600 text-white font-bold rounded-md hover:bg-black hover:text-yellow-600 transition duration-300"
                >
                    Explore All Images
                </button>
            </div>

            {/* All Images Modal */}
            {isAllImagesOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-6 overflow-auto">
                    <div className="relative bg-white rounded-lg max-w-6xl w-full max-h-screen overflow-y-auto">
                        {/* Close Button */}
                        <button
                            onClick={closeAllImages}
                            className="absolute top-2 right-2 bg-white rounded-full p-1.5 text-black hover:bg-gray-200 z-50 "
                        >
                            ✖
                        </button>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-4 p-4">
                            {galleryItems.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => openSingleImage(index)}
                                    className="relative overflow-hidden rounded-lg cursor-pointer"
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Single Image Modal */}
            {isSingleImageOpen && currentImageIndex !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
                    <div className="relative max-w-full max-h-full overflow-hidden flex justify-center">
                        <button
                            onClick={closeSingleImage}
                            className="absolute top-2 right-2 bg-white rounded-full p-1.5 text-black hover:bg-gray-200 z-50"
                        >
                            ✖
                        </button>
                        <button
                            onClick={showPreviousImage}
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-1.5 text-black hover:bg-gray-200 z-50"
                        >
                            ◀
                        </button>
                        <Image
                            src={galleryItems[currentImageIndex].src}
                            alt={galleryItems[currentImageIndex].alt}
                            width={window.innerWidth <= 768 ? 400 : 800}  // Adjust size for mobile
                            height={window.innerWidth <= 768 ? 300 : 600} // Adjust size for mobile
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                        <button
                            onClick={showNextImage}
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-1.5 text-black hover:bg-gray-200 z-50"
                        >
                            ▶
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
