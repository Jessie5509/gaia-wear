import { React, useState, useEffect } from "react";
import Image from "next/image";
import Toast from "../../components/Toast";

export default function CartItem({ item }) {
  const [storedCart, setStoredCart] = useState([]);
  const [not, setNot] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("usercart")) || [];
    setStoredCart(storedCart);
  }, []);

  const deleteItem = () => {
    const updatedCart = storedCart.filter((item) => item.id !== item.id);
    localStorage.setItem("usercart", JSON.stringify(updatedCart));
    setStoredCart(updatedCart);
    setNot(true);
  };

  return (
    <main className="flex gap-4 w-full p-6 border rounded-2xl shadow-md mb-5 max-sm:flex-col max-sm:items-center">
      <section className="min-w-[5dvw]">
        <Image
          src={item.image_url}
          width={80}
          height={120}
          alt={item.name}
          className="bg-card bg-no-repeat bg-center bg-cover"
        />
      </section>
      <section className="flex flex-col min-w-[10dvw] max-w-2xl min-h-fit">
        <h1 className="text-lg font-bold mb-3">{item.name}</h1>
        <hr className="w-full" />
        <p className="max-w-60">{item.description}</p>
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
      <section className="flex items-center">
        <button
          className="bg-trash bg-no-repeat bg-cover w-6 h-6"
          onClick={deleteItem}
        ></button>
      </section>
      {not ? <Toast text="Item deleted successfully." /> : null}
    </main>
  );
}
