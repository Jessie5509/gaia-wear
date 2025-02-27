"use client";
import { React, useState, useRef } from "react";
import Card from "../components/Card";

export default function Carousel({ products }) {
  const itemWidth = 100 / 8;
  const totalSlides = products.length;
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleArrowNext = () => {
    if (currentSlide < totalSlides - 8) {
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
    if (!isDragging) return; // Solo ejecutar si estamos arrastrando
    e.preventDefault();

    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = x - startX; // Calcular cuánto se ha movido
    carouselRef.current.scrollLeft = scrollLeft - walk; // Actualizar scroll

    // Calcular nuevo índice basado en la posición del scroll
    const newScrollLeft = carouselRef.current.scrollLeft;

    // Calcular nuevo índice asegurando que esté dentro de los límites
    let newCurrentSlide = Math.floor(
      newScrollLeft / (carouselRef.current.scrollWidth / products.length)
    );

    // Limitar newCurrentSlide a los límites válidos
    newCurrentSlide = Math.max(
      0,
      Math.min(newCurrentSlide, products.length - 8)
    );

    // Actualizar solo si hay un cambio real en el índice
    if (newCurrentSlide !== currentSlide) {
      onSlideChange(newCurrentSlide); // Llamar a la función para actualizar el slide actual
      // Sincronizar scroll con el nuevo índice para evitar saltos
      carouselRef.current.scrollLeft =
        newCurrentSlide * (carouselRef.current.scrollWidth / products.length);
    }
  };

  return (
    <main>
      <section
        className={`transition-all relative max-w-[99dvw] overflow-hidden px-6 ${
          isDragging ? "cursor-grabbing" : "cursor-default"
        }`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        ref={carouselRef}
      >
        <article className="flex justify-between gap-6 px-6 py-10 font-main">
          <h3 className="text-2xl">
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
              disabled={currentSlide === totalSlides - 8}
            ></button>
          </div>
        </article>
        {/* <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * itemWidth}%)`,
          }}
        >
          {products.map((product, index) => (
            <article
              key={index}
              className="flex-shrink-0"
              style={{ width: `${itemWidth}%` }}
            >
              <Card prod={product} />
            </article>
          ))}
        </div> */}
        <div
          className="flex flex-row transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * itemWidth}%)`,
          }}
        >
          <article className="flex-shrink-0" 
          // style={{ width: `${itemWidth}%` }}
          >
            <Card prod={products} />
          </article>
        </div>
      </section>
    </main>
  );
}
