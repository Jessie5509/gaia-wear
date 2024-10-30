import React from "react";

export default function Card() {
  return (
    <main className="flex flex-row">
      <section className="shadow group flex flex-col justify-end w-[17dvw] h-[50dvh] bg-card bg-no-repeat bg-center bg-cover mr-10">
        <article className="opacity-0 transform translate-y-6 transition-all duration-1000 group-hover:opacity-100 group-hover:translate-y-0 flex flex-row justify-around details-card p-3">
          <span>Beige</span>
          <span>S</span>
          <span>$115.00</span>
        </article>
      </section>
      <section className="shadow group flex flex-col justify-end w-[17dvw] h-[50dvh] bg-card bg-no-repeat bg-center bg-cover mr-10">
        <article className="opacity-0 transform translate-y-6 transition-all duration-1000 group-hover:opacity-100 group-hover:translate-y-0 flex flex-row justify-around details-card p-3">
          <span>White</span>
          <span>M</span>
          <span>$39.99</span>
        </article>
      </section>
    </main>
  );
}
