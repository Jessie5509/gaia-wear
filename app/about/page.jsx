"use client";
import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="mt-40">
      <section className="flex flex-row justify-center w-full max-sm:flex-col">
        <article className="max-w-[50dvw] max-sm:max-w-fit">
          <header className="text-2xl mx-10 max-sm:text-center">We're GAIA WEAR</header>
          <header className="text-6xl m-10 mt-2 max-sm:text-center">
            We Believe Big Change Starts Small.
          </header>
          <p className="max-w-[100dvw] mx-10">
            Small as in choosing second-hand options, supporting slow fashion,
            or making sustainable choices when you shop. For every clothing item
            purchased, we contribute to reforestation efforts by planting trees
            to regenerate ecosystems, capture carbon, and provide sustainable
            jobs in communities worldwide. All our garments are created with an
            Earth-First approach, ensuring they're made in fair, safe working
            conditions and crafted using sustainably sourced, organic, and
            recycled materials.
          </p>

          <article className="flex flex-col justify-start mx-10 my-10">
            <header className="text-2xl font-semibold mb-3">
              Creating Lasting Impact
            </header>
            <p>
              Materials matter. They matter when it comes to the life of our
              clothes, or the way we feel as we live in them. But most
              importantly, they matter for our earth. That's why we source only
              the most comfortable and sustainable textiles on the market.
              Whether it's a jacket made from 99% compostable materials, or
              activewear that helps divert waste from landfills, all of our
              products are made with the earth in mind.
            </p>
            <p className="mt-5">
              By using only organic or recycled materials — like ECOFIBER™
              lyocell, GreenWeave™ organic cotton, or RenewTech™ recycled
              polyester — we're able to cut back on the waste water and
              emissions that are created by typical apparel manufacturing. And
              though 98% of all of our products are eco-friendly, we're always
              looking to innovate with new materials and methods, like recycled
              nylon, cotton, and naturally dyed or undyed fabrics.
            </p>
          </article>
        </article>
        <article>
          <Image
            src={"/aboutdesk.jpg"}
            width={1920}
            height={1279}
            alt="Nature"
          />
          <article className="flex flex-row justify-center gap-8 my-10 max-sm:gap-16">
            <div className="flex flex-col items-center max-w-[8dvw] text-pretty text-center">
              <span className="font-medium text-2xl">100M+</span>
              <span>Trees planted to date</span>
            </div>
            <div className="flex flex-col items-center max-w-[8dvw] text-pretty text-center">
              <span className="font-medium text-2xl">75M+</span>
              <span>Communities helped</span>
            </div>
            <div className="flex flex-col items-center max-w-[8dvw] text-pretty text-center">
              <span className="font-medium text-2xl">75M+</span>
              <span>Hours of work provided</span>
            </div>
            <div className="flex flex-col items-center max-w-[8dvw] text-pretty text-center">
              <span className="font-medium text-2xl">4</span>
              <span>Maternity care center built</span>
            </div>
          </article>
        </article>
      </section>
      {/* Grid */}
      <section className="mx-10 my-10">
        <article>
          <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div class="grid gap-4">
              <div>
                <Image
                  class="h-auto max-w-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  src="/aboutg1.jpg"
                  alt="gallery-photo"
                  width={640}
                  height={960}
                />
              </div>
              <div>
                <Image
                  class="h-auto max-w-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  src="/aboutg2.jpg"
                  alt="gallery-photo"
                  width={640}
                  height={426}
                />
              </div>
              <div>
                <Image
                  class="h-auto max-w-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  src="/aboutg3.jpg"
                  alt="gallery-photo"
                  width={640}
                  height={960}
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <Image
                  class="h-auto max-w-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  src="/aboutg6.jpg"
                  alt="gallery-photo"
                  width={640}
                  height={853}
                />
              </div>
              <div>
                <Image
                  class="h-auto max-w-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  src="/aboutg5.jpg"
                  alt="gallery-photo"
                  width={640}
                  height={958}
                />
              </div>
              <div>
                <Image
                  class="h-auto max-w-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  src="/aboutg4.jpg"
                  alt="gallery-photo"
                  width={640}
                  height={827}
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <Image
                  class="h-auto max-w-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  src="/aboutg7.jpg"
                  alt="gallery-photo"
                  width={640}
                  height={800}
                />
              </div>
              <div>
                <Image
                  class="h-auto max-w-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  src="/aboutg8.jpg"
                  alt="gallery-photo"
                  width={640}
                  height={959}
                />
              </div>
              <div>
                <Image
                 class="h-auto max-w-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  src="/aboutg11.jpg"
                  alt="gallery-photo"
                  width={640}
                  height={960}
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <Image
                  class="h-auto max-w-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  src="/aboutg10.jpg"
                  alt="gallery-photo"
                  width={640}
                  height={480}
                />
              </div>
              <div>
                <Image
                  class="h-auto max-w-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  src="/aboutg9.jpg"
                  alt="gallery-photo"
                  width={640}
                  height={960}
                />
              </div>
              <div>
                <Image
                  class="h-auto max-w-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  src="/aboutg12.jpg"
                  alt="gallery-photo"
                  width={640}
                  height={960}
                />
              </div>
            </div>
          </div>
        </article>
        {/* fin */}
      </section>
    </main>
  );
}
