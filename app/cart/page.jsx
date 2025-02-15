"use client";
import { useState, useEffect } from "react";
import Cart from "./Cart";
import Checkout from "./Checkout";

export default function CartContainer() {
  const [storedCart, setStoredCart] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("usercart")) || [];
    setStoredCart(cart);
  }, []);

  return (
    <main className="pt-32 min-h-screen">
      {storedCart.length > 0 ? (
        <>
          <header className="text-5xl flex justify-center">Checkout</header>
          <section className="flex flex-row justify-center mt-10 min-h-screen gap-4">
            <Cart />
            <Checkout />
          </section>
        </>
      ) : (
        <article className="flex flex-col items-center justify-center">
          <header className="text-2xl font-semibold">
            Your cart is empty!
          </header>
          <p>Add your favorite items to your cart.</p>
        </article>
      )}
    </main>
  );
}
