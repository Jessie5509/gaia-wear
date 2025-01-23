import React from "react";
import Cart from "./Cart";
import Checkout from "./Checkout";

export default async function CartContainer() {
  // const orders = await fetch(`${process.env.URL}/api/cart`);
  // if (!orders.ok) {
  //   throw new Error("Failed to fetch data");
  // }
  // const order = await orders.json();
  return (
    <main className="flex flex-row justify-center mt-32 min-h-screen gap-4">
      <Cart />
      <Checkout />
    </main>
  );
}
