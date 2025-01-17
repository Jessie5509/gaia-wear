import Image from "next/image";
import Button from "../../../components/Button";

export default async function CardDetails({ params }) {
  const response = await fetch(
    `${process.env.URL}/api/products?id=${params.id}`
  );
  if (!response.ok) {
    return notFound();
  }
  const product = await response.json();

  return (
    <main className="flex justify-evenly w-full min-h-screen p-6 mt-32">
      <section>
        <Image
          src={product.image_url}
          width={540}
          height={860}
          alt={product.name}
          className="bg-card bg-no-repeat bg-center bg-cover"
        />
      </section>
      <section className="flex flex-col max-w-2xl min-h-fit">
        <h1 className="text-2xl font-bold mb-5">{product.name}</h1>
        <p>reviews</p>
        <p className="mb-5">{product.description}</p>
        <hr />
        <span>{product.color}</span>
        <article className="bg-black w-3 h-3 rounded-full"></article>

        <span>${product.price}</span>
        <span>{product.size}</span>
        <span>{product.material}</span>
        <span>{product.category_name}</span>
        <button className="mt-5">
          <Button text={"Add to cart"} />
        </button>
      </section>
    </main>
  );
}
