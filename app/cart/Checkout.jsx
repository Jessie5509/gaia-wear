"use client";
import React from "react";

export default function Checkout() {
  const storedCart = JSON.parse(localStorage.getItem("usercart")) || [];
  const subTotal = storedCart.reduce((acu, i) => {
    return acu + i.total_price;
  }, 0);
  return (
    <main className="flex flex-col justify-center w-[20dvw] h-fit px-5 border rounded-2xl shadow-lg">
      <section className="px-6 py-6">
        <header className="text-center mb-5">Order Summary</header>
        <div className="flex flex-row justify-between">
          <article>SubTotal:</article>
          <article>${subTotal}</article>
        </div>
        <div className="flex flex-row justify-between">
          <article>Shipping:</article>
          <article>$14</article>
        </div>
        <hr className="mx-5 my-5" />
        <div className="flex flex-row justify-between">
          <strong>Total:</strong>
          <h2>
            USD <strong>{subTotal + 14}</strong>
          </h2>
        </div>
      </section>
      <section className="px-3 py-3 m-3">
        <button className="bg-primary text-white px-5 py-3 w-full min-h-fit rounded-md">
          Checkout
        </button>
      </section>
    </main>
  );
}
