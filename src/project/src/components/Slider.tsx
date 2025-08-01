import React from 'react';
import { WhatsApp } from 'lucide-react';

const Slider = () => {
  return (
    <div className="relative">
      {/* Slider content goes here */}
      <div className="slider">
        <img src="https://via.placeholder.com/800x400" alt="Slide 1" className="w-full h-auto" />
        <img src="https://via.placeholder.com/800x400" alt="Slide 2" className="w-full h-auto" />
        <img src="https://via.placeholder.com/800x400" alt="Slide 3" className="w-full h-auto" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="bg-white text-black p-2 rounded-full shadow-lg">
          <WhatsApp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Slider;