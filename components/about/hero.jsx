'use client'
import { useRef, useEffect } from 'react';

export function Hero() {
  const audioRef = useRef(null);

  const handleBackgroundHover = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch(error => {
        console.log('Audio play failed:', error);
      });
    }
  };

  return (
    <section
      className="relative h-[60vh] md:h-[89vh] w-full flex items-center justify-center text-center text-white"
      onMouseEnter={handleBackgroundHover}
    >
      <video
        src="https://res.cloudinary.com/dmlavu7is/video/upload/v1762847806/12819260_1920_1080_25fps_oddv6u.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        muted
        autoPlay
        loop
        playsInline
      />
      <audio
        ref={audioRef}
        src="https://res.cloudinary.com/dmlavu7is/video/upload/v1762851080/forest-nature-322637_pmot18.mp3"
        loop
        preload="auto"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-4 animate-fade-in-down">Our Story</h1>
        <p className="text-lg md:text-xl mb-2 animate-fade-in-up text-white/90">
          At Nutrizo, we believe that healthy eating should be delicious and accessible. Our journey began with a simple mission: to create wholesome snacks and beverages that nourish your body and delight your taste buds.
        </p>
        <p className="text-lg md:text-xl animate-fade-in-up animation-delay-300 text-white/90">
          We are committed to using only the finest natural ingredients, sourced responsibly from our local farms. Our values are rooted in health, quality, and sustainability, guiding every product we craft.
        </p>
      </div>
    </section>
  );
}
