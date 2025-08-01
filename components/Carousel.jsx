"use client";
import { useState, useRef } from "react";
import Card from "../components/Card";

export default function Carousel({ products }) {
  const itemWidth = 100 / products.length;
  const totalSlides = products.length;
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleArrowNext = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleArrowPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSlideChange = (newIndex) => {
    setCurrentSlide(newIndex);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = x - startX;
    carouselRef.current.scrollLeft = scrollLeft - walk;
    const newScrollLeft = carouselRef.current.scrollLeft;

    let newCurrentSlide = Math.floor(
      newScrollLeft / (carouselRef.current.scrollWidth / totalSlides)
    );

    newCurrentSlide = Math.max(0, Math.min(newCurrentSlide, totalSlides));

    if (newCurrentSlide !== currentSlide) {
      handleSlideChange(newCurrentSlide);
      carouselRef.current.scrollLeft =
        newCurrentSlide * (carouselRef.current.scrollWidth / totalSlides);
    }
  };

  return (
    <main>
      <section>
        <article className="flex justify-between gap-6 px-8 py-10 font-main">
          <h3 className="text-2xl max-sm:text-xl">
            <strong>NEW & TRENDING </strong>handpicked must-haves for your
            wardrobe
          </h3>
          <div className="flex justify-center items-center gap-2">
            <button
              aria-label="Previous Slide"
              className="disabled:bg-gray-300 rounded-full bg-gray-400 bg-arrow-left bg-no-repeat bg-center w-[2rem] h-[2rem] p-1"
              onClick={handleArrowPrev}
              disabled={currentSlide === 0}
            ></button>
            <button
              aria-label="Next Slide"
              className="disabled:bg-gray-300 rounded-full bg-gray-400 bg-arrow-right bg-no-repeat bg-center w-[2rem] h-[2rem] p-1"
              onClick={handleArrowNext}
              disabled={currentSlide === totalSlides - 5}
            ></button>
          </div>
        </article>
      </section>
      <section
        className={`transition-all relative max-w-[99dvw] overflow-hidden px-8 ${
          isDragging ? "cursor-grabbing" : "cursor-default"
        }`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        ref={carouselRef}
      >
        <div
          className="flex flex-row transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * itemWidth}%)`,
          }}
        >
          <article className="flex-shrink-0">
            <Card prod={products} />
          </article>
        </div>
      </section>
    </main>
  );
}
