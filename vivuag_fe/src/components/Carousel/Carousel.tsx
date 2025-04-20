import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import mieubachuaxu from './../../assets/images/mieubachuaxu.jpg';
import nuisam from '../../assets/images/nuisam.jpg';
import nuicam from '../../assets/images/nuicam.jpg';
import hotapa from '../../assets/images/hotapa.jpg';
import hoothum from '../../assets/images/hoothum.jpg';
import cloudoverlay from "../../assets/videos/cloudoverlay.mp4";

interface Slide {
  id: number;
  image: string;
  title: string;
  alt: string;
  desc: string;
}
// Array of slides
const slides: Slide[] = [
  { id: 1, image: mieubachuaxu, alt: 'Slide 1', title: 'Mieu Ba Chua Xu', desc: 'A beautiful place to visit.' },
  { id: 2, image: nuicam, alt: 'Slide 2', title: 'Nui Cam', desc: 'A stunning mountain view.' },
  { id: 3, image: nuisam, alt: 'Slide 3', title: 'Nui Sam', desc: 'A serene landscape.' },
  { id: 4, image: hotapa, alt: 'Slide 4', title: 'Ho Ta Pa', desc: 'A tranquil lake.' },
  { id: 5, image: hoothum, alt: 'Slide 5', title: 'Ho O Thum', desc: 'A picturesque scenery.' },
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(Math.floor(slides.length / 2));

  const getSlideStyle = (index: number) => {
    const slideCount = slides.length;
    let offset = index - currentSlide;

    // Điều chỉnh offset để tạo vòng lặp
    if (offset > slideCount / 2) {
      offset -= slideCount;
    } else if (offset < -slideCount / 2) {
      offset += slideCount;
    }

    const absOffset = Math.abs(offset);

    if (absOffset === 0) {
      return {
        zIndex: 10,
        transform: 'translateX(0%) scale(1)',
        opacity: 1,
        filter: 'brightness(100%)',
        transformOrigin: 'top center'
      };
    } else if (absOffset === 1) {
      return {
        zIndex: 8,
        transform: `translateX(${offset * 85}%) scale(0.85) rotateX(-15deg) rotateY(${offset < 0 ? 40 : -40}deg)`,
        opacity: 0.9,
        filter: 'brightness(60%)',
        transformOrigin: 'top center'
      };
    } else if (absOffset === 2) {
      return {
        zIndex: 6,
        transform: `translateX(${offset * 73}%) scale(0.7) rotateX(-15deg) rotateY(${offset < 0 ? 40 : -40}deg)`,
        opacity: 0.7,
        filter: 'brightness(60%)',
        transformOrigin: 'top center'
      };
    } else {
      return {
        zIndex: 1,
        transform: `translateX(${offset * 150}%) scale(0)`,
        opacity: 0,
        filter: 'brightness(0%)'
      };
    }
  };



  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className=" w-full ">

      <button
        onClick={handlePrev}
        className="absolute left-0 md:left-24 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 p-5 rounded-full shadow-lg hover:bg-opacity-100 transition-all z-30 disabled:opacity-50 disabled:cursor-not-allowed"

      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="absolute right-16 md:right-24 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 p-5 rounded-full shadow-lg hover:bg-opacity-100 transition-all z-30"

      >
        →
      </button>
      <div className=" w-full h-full flex items-center justify-center overflow-hidden">
        {slides.map((slide: Slide, index: number) => (
          <motion.div
            key={slide.id}
            className="absolute w-70 h-[400px] rounded-lg shadow-2xl"
            style={{
              transformStyle: 'preserve-3d',
            }}
            animate={getSlideStyle(index)}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            onClick={() => setCurrentSlide(index)}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover mask-b-from-90% mask-b-to-95% brightness-75"
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: index === currentSlide ? 0 : 50,
              }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-lg font-bold">{slide.title}</h2>
              <p className="text-sm">{slide.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>


      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_: Slide, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'
              }`}
          />
        ))}
      </div>

        <div className='mask-t-from-90% absolute left-0 bottom-4 w-full  z-20'>
        <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[100px] object-cover mx-auto rounded-xl"
      >
        <source src={cloudoverlay} type="video/mp4" />
      </video>
        </div>
      {/* Text Overlay */}
      <AnimatePresence mode="wait">
  <div className="absolute inset-0 top-60 flex flex-col items-center justify-center text-white z-10 pointer-events-none">
    <motion.div
      key={slides[currentSlide].id}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      className="mt-10 text-center"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-widest">
        {slides[currentSlide].title.toUpperCase()}
      </h1>
      <hr className="w-20 h-px my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-4">
        {slides[currentSlide].desc}
      </p>
    </motion.div>

  </div>
</AnimatePresence>

    </div>
  );
};

export default Carousel;