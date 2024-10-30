import Image from "next/image";
import Card from "@/components/Card";

export default function Page() {
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
            <button className="rounded-full bg-gray-400 bg-arrow-left bg-no-repeat bg-center w-[2rem] h-[2rem] p-1"></button>
            <button className="rounded-full bg-gray-400 bg-arrow-right bg-no-repeat bg-center w-[2rem] h-[2rem] p-1"></button>
          </div>
        </article>
        <article className="flex flex-row items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Card />
          {/* big filter clothes cards like pantee */}
        </article>
      </section>
      <section className="bg-[#8ca87c]">
        <header className="text-center text-5xl m-10">
          How Our Garments Heal Mother Earth
        </header>
        <div className="flex justify-center items-center flex-row m-10">
          <article className="flex flex-col items-center w-[60rem] m-10">
            <h3 className="text-xl text-black">
              Sustainability = Transparency
            </h3>
            <p className="text-lg text-black">
              learn more The apparel industry creates a lot of trash—10.5
              million tonnes per year, to be exact. We're helping divert some of
              it from landfills, while conserving water and important resources,
              too. By planting trees for every item purchased, we prove to the
              world that sustainability can and should be as easy as putting on
              a t-shirt. Here's a snapshot of the impact you've helped create so
              far this year
            </p>
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
