import Image from "next/image";
import Carousel from "../components/Carousel";

export default async function Home() {
  const products = await fetch(`${process.env.URL}/api/products`, {
    cache: "no-store",
  });
  if (!products.ok) {
    throw new Error("Failed to fetch data");
  }
  const productsJ = await products.json();
  const productsA = Array.isArray(productsJ) ? productsJ : productsJ.rows || [];
  const firstTenProducts = productsA.slice(0, 8);

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
      <section id="new" className="mt-4 flex flex-col gap-4 w-full">
        <Carousel products={firstTenProducts} />
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
