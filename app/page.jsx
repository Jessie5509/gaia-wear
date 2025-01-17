"use client";
import Image from "next/image";
import Carousel from "../components/Carousel";
import { React, useEffect, useState } from "react";
import { getNewClothes } from "./lib/utils";

export default function Page() {
  const [clothes, setClothes] = useState([
    {
      color: "Beige",
      size: "Big",
      price: 20.0,
    },
    {
      color: "White",
      size: "Small",
      price: 60.0,
    },
    {
      color: "Olive",
      size: "G",
      price: 30.0,
    },
    {
      color: "Gray",
      size: "M",
      price: 30.0,
    },
    {
      color: "Green",
      size: "G",
      price: 30.0,
    },
    {
      color: "Black",
      size: "M",
      price: 30.0,
    },
    {
      color: "Blue",
      size: "XL",
      price: 30.0,
    },
    {
      color: "Red",
      size: "S",
      price: 30.0,
    },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsToShow = 5;
  const totalSlides = clothes.length;

  const handleArrowNext = () => {
    if (currentSlide < totalSlides - itemsToShow) {
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

  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex shrink-0">
        <Image src="/home.jpeg" width={1920} height={1137} alt="Banner" />
        <div className="absolute bottom-0 w-[55dvw] p-8">
          <article className="flex flex-col text-white font-main">
            <h1 className="text-9xl">Nature's Touch</h1>
            <span className="text-xl text-pretty w-[45dvw]">
              Mother Nature knows best. We took a page from her book when
              crafting these ultra-comfy, textured pieces with natural, durable,
              and kind-to-the-planet materials.
            </span>
          </article>
        </div>
      </section>
      <section className="mt-4 flex flex-col gap-4 w-full">
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
              disabled={currentSlide === totalSlides - itemsToShow}
            ></button>
          </div>
        </article>
        {/* <Carousel
          products={clothes}
          currentSlide={currentSlide}
          itemsToShow={itemsToShow}
          onSlideChange={handleSlideChange}
        /> */}
      </section>
      <section className="bg-beige-400">
        <header className="text-center text-5xl m-10">
          How Our Garments Heal Mother Earth
        </header>
        <div className="flex justify-center items-center flex-row m-10">
          <article className="flex flex-col w-[60rem] m-10">
            <h3 className="text-3xl text-black mb-4">
              Sustainability = Transparency
            </h3>
            <p className="text-lg text-black">
              The apparel industry creates a lot of trash—10.5 million tonnes
              per year, to be exact. We're helping divert some of it from
              landfills, while conserving water and important resources, too. By
              planting trees for every item purchased, we prove to the world
              that sustainability can and should be as easy as putting on a
              t-shirt. Here's a snapshot of the impact you've helped create so
              far this year
            </p>
            <div className="flex flex-row justify-center gap-16 m-8">
              <div className="flex flex-col items-center">
                <icon className="bg-trash bg-no-repeat bg-center w-[2rem] h-[2rem]"></icon>
                <strong>200 MM g</strong>
                <span>waste saved</span>
              </div>
              <div className="flex flex-col items-center">
                <icon className="bg-water-drop bg-no-repeat bg-center w-[2rem] h-[2rem]"></icon>
                <strong>245 MM l</strong>
                <span>water saved</span>
              </div>
              <div className="flex flex-col items-center">
                <icon className="bg-cloud bg-no-repeat bg-center w-[2rem] h-[2rem]"></icon>
                <strong>1 MM kg</strong>
                <span>CO2 saved</span>
              </div>
            </div>
          </article>
          <Image
            src="/sustainability.jpg"
            width={780}
            height={354}
            alt="Sustainability"
            className="bg-no-repeat bg-cover"
          />
        </div>
      </section>
    </main>
  );
}
