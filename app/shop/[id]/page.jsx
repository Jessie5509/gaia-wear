import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "../../cart/AddToCartButton";

export default async function CardDetails({ params }) {
  const response = await fetch(
    `${process.env.URL}/api/products?id=${params.id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return notFound();
  }
  const product = await response.json();
  const colors = [
    { num: 1, name: "Pure White", HEX: "#FFFFFF" },
    { num: 2, name: "Charcoal Black", HEX: "#1A1A1A" },
    { num: 3, name: "Light Gray", HEX: "#F2F2F2" },
    { num: 4, name: "Slate Gray", HEX: "#7D7D7D" },
    { num: 5, name: "Navy Blue", HEX: "#2C3E50" },
    { num: 6, name: "Terracotta", HEX: "#D35400" },
    { num: 7, name: "Blush Pink", HEX: "#EEC9C9" },
    { num: 8, name: "Orange", HEX: "#FF7000" },
    { num: 9, name: "Red", HEX: "#B30000" },
    { num: 10, name: "Green", HEX: "#6B8E23" },
    { num: 11, name: "Brown", HEX: "#8B4513" },
    { num: 12, name: "Beige", HEX: "#DEDEB0" },
    { num: 13, name: "Gold", HEX: "#DAA520" },
  ];
  const productColor = colors.find((c) => c.num === product.color);

  return (
    <main className="flex justify-center min-h-screen p-6 m-20 mt-32 gap-20 shadow-xl bg-[#f6f6f6] rounded-lg">
      <section>
        <Image
          src={product.image_url}
          width={500}
          height={820}
          alt={product.name}
          priority
          className="bg-no-repeat bg-center bg-cover rounded-md"
        />
      </section>
      <section className="flex flex-col max-w-xl min-h-fit">
        <article className="flex flex-row justify-between">
          <h1 className="text-2xl font-bold mb-5">{product.name}</h1>
          <span className="text-2xl">${product.price}</span>
        </article>
        <hr />
        <section className="flex justify-between items-center mt-3">
          <div className="flex flex-row py-1">
            {[...Array(product.review)].map((_, i) => (
              <article
                key={i.num}
                className="bg-star bg-no-repeat bg-center bg-cover w-6 h-6"
              />
            ))}
          </div>
          <article className="bg-secondary text-white text-xs rounded-md p-1 w-fit">
            <span>{product.category_name}</span>
          </article>
        </section>
        <p className="mb-5">{product.description}</p>
        <hr />
        <div className="flex flex-col py-4 pr-4">
          <article
            className="w-6 h-6 rounded-full mb-1"
            style={{ backgroundColor: productColor?.HEX }}
          ></article>
          <span>{productColor.name}</span>
          <article className="flex flex-row my-2">
            <button className="bg-white border-2 border-solid border-secondary w-8 h-8 rounded-full flex items-center justify-center mr-2">
              S
            </button>
            <button className="bg-white border-2 border-solid border-secondary w-8 h-8 rounded-full flex items-center justify-center mr-2">
              M
            </button>
            <button className="bg-white border-2 border-solid border-secondary w-8 h-8 rounded-full flex items-center justify-center mr-2">
              L
            </button>
            <button className="bg-white border-2 border-solid border-secondary w-8 h-8 rounded-full flex items-center justify-center mr-2">
              XL
            </button>
          </article>
          <span>{product.material}</span>
        </div>
        <hr />
        <article className="flex justify-center mt-5">
          <AddToCartButton product={product} />
        </article>
      </section>
    </main>
  );
}
