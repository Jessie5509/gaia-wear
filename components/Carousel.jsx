import { React, useState, useRef } from "react";
import Card from "../components/Card";

export default function Carousel({
  products,
  currentSlide,
  onSlideChange,
  itemsToShow,
}) {
  const itemWidth = 100 / itemsToShow;
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

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

  // const handleMouseMove = (e) => {
    
  //   if (!isDragging) return;
  //   e.preventDefault();
  //   console.log('current', currentSlide);
  //   const x = e.pageX - carouselRef.current.offsetLeft;
  //   const walk = (x - startX) * 1;
  //   carouselRef.current.scrollLeft = scrollLeft - walk;
  // };

  const handleMouseMove = (e) => {
    if (!isDragging) return; // Solo ejecutar si estamos arrastrando
    e.preventDefault();

    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX); // Calcular cuánto se ha movido
    carouselRef.current.scrollLeft = scrollLeft - walk; // Actualizar scroll

    // Calcular nuevo índice basado en la posición del scroll
    const newScrollLeft = carouselRef.current.scrollLeft;

    // Calcular nuevo índice asegurando que esté dentro de los límites
    let newCurrentSlide = Math.floor(newScrollLeft / (carouselRef.current.scrollWidth / products.length));

    // Limitar newCurrentSlide a los límites válidos
    newCurrentSlide = Math.max(0, Math.min(newCurrentSlide, products.length - itemsToShow));

    // Actualizar solo si hay un cambio real en el índice
    if (newCurrentSlide !== currentSlide) {
      onSlideChange(newCurrentSlide); // Llamar a la función para actualizar el slide actual
      // Sincronizar scroll con el nuevo índice para evitar saltos
      carouselRef.current.scrollLeft = newCurrentSlide * (carouselRef.current.scrollWidth / products.length);
    }
  };

  return (
    <main
      className={`transition-all relative max-w-[99dvw] overflow-hidden px-6 ${
        isDragging ? "cursor-grabbing" : "cursor-default"
      }`}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      ref={carouselRef}
    >
      <div
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
            <Card clothes={product} />
          </article>
        ))}
      </div>
    </main>
  );
}
