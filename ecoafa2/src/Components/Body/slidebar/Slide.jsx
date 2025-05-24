import React, { useState, useEffect, useRef } from 'react';

import img1 from '../../../assets/slide/1.png'
import img2 from '../../../assets/slide/2.avif';
import img3 from '../../../assets/slide/3.avif';
import img4 from '../../../assets/slide/4.avif';
import img5 from '../../../assets/slide/5.avif';

const images = [img1, img2, img3, img4, img5];

export const Slide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
        }, 4000);
    };

    useEffect(() => {
        startInterval();
        return () => clearInterval(intervalRef.current);
    }, []);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
        clearInterval(intervalRef.current);
        startInterval();
    };

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length);
        clearInterval(intervalRef.current);
        startInterval();
    }

    const handleNextClick = () => {
        setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
        clearInterval(intervalRef.current);
        startInterval();
    }

    return (
        <div className="relative w-screen -left-44 -top-10 h-64 md:h-[32rem] overflow-hidden rounded-none shadow-lg bg-gray-200">
            {/* Botón anterior */}
            <button
    className="absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-black/60 text-white rounded-2xl  p-2 shadow transition-all duration-400 cursor-pointer
               hover:bg-[#0056B3] hover:text-white hover:translate-y-2 "
    onClick={handlePrevClick}
    aria-label="Anterior"
>
    <span className="text-3xl font-bold">&lsaquo;</span>
</button>
<button
    className="absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-black/60 text-white rounded-2xl p-2 shadow transition-all duration-400 cursor-pointer
               hover:bg-[#0056B3] hover:text-white hover:translate-y-2 "
    onClick={handleNextClick}
    aria-label="Siguiente"
>
    <span className="text-3xl font-bold">&rsaquo;</span>
</button>
            {/* Imágenes */}
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
                    draggable="false"
                />
            ))}
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full border-2 border-green-700 transition-all duration-200 ${index === currentIndex ? 'bg-green-700 scale-125' : 'bg-white'}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Ir al slide ${index + 1}`}
                        tabIndex={0}
                    ></button>
                ))}
            </div>
        </div>
    );
};