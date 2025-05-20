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
        <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center overflow-hidden rounded-2xl shadow-lg bg-white h-72">
            {/* Botón anterior */}
            <button
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-200 border border-green-200"
                onClick={handlePrevClick}
                aria-label="Anterior"
            >
                <span className="text-3xl font-bold select-none">&lsaquo;</span>
            </button>
            {/* Botón siguiente */}
            <button
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-200 border border-green-200"
                onClick={handleNextClick}
                aria-label="Siguiente"
            >
                <span className="text-3xl font-bold select-none">&rsaquo;</span>
            </button>
            {/* Imágenes */}
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`absolute inset-0 w-full h-72 object-cover transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    draggable="false"
                />
            ))}
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full border-2 border-green-700 transition-all duration-300 focus:outline-none ${index === currentIndex ? 'bg-green-700 scale-125 shadow' : 'bg-white'}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Ir al slide ${index + 1}`}
                        tabIndex={0}
                    ></button>
                ))}
            </div>
        </div>
    );
};