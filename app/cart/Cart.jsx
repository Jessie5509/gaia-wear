"use client";
import React from "react";
import CartItem from "./CartItem";

export default function Cart() {
  const storedCart = JSON.parse(localStorage.getItem("usercart")) || [];
  return (
    <main>
      <section>
        {storedCart.map((s) => (
          <CartItem key={s.id} item={s} />
        ))}
      </section>
    </main>
  );
}
