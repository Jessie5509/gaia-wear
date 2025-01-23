import React from "react";
import Image from "next/image";

export default function CartItem({ item }) {
  return (
    <article className="flex gap-4 w-full p-6 border rounded-2xl shadow-md mb-5">
      <section className="min-w-[5dvw]">
        <Image
          src={item.image_url}
          width={80}
          height={120}
          //   alt={item.name}
          className="bg-card bg-no-repeat bg-center bg-cover"
        />
      </section>
      <section className="flex flex-col min-w-[10dvw] max-w-2xl min-h-fit">
        <h1 className="text-lg font-bold mb-3">{item.name}</h1>
        <hr className="w-full" />
        <span>{item.color}</span>
        <article className="bg-black w-3 h-3 rounded-full"></article>
        <span>${item.price}</span>
        <span>{item.size}</span>
      </section>
      <section className="flex flex-col items-center min-w-[10dvw]">
        <h1 className="text-lg font-bold mb-3">Quantity</h1>
        <hr className="w-full" />
        <span>{item.quantity}</span>
      </section>
      <section className="flex flex-col items-center min-w-[10dvw]">
        <h1 className="text-lg font-bold mb-3">Total price</h1>
        <hr className="w-full" />
        <span>${item.total_price}</span>
      </section>
    </article>
  );
}
