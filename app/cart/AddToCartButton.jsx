"use client";
export default function AddToCartButton({ product }) {
  const addToCart = () => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("usercart")) || [];
      const existingProductIndex = storedCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        storedCart[existingProductIndex].quantity += 1;
        storedCart[existingProductIndex].total_price =
          storedCart[existingProductIndex].price *
          storedCart[existingProductIndex].quantity;
      } else {
        const newProduct = {
          ...product,
          quantity: 1,
          total_price: product.price,
        };
        storedCart.push(newProduct);
      }

      localStorage.setItem("usercart", JSON.stringify(storedCart));
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
    }
  };

  return (
    <button
      onClick={addToCart}
      className="bg-primary text-white px-5 py-3 w-full min-h-fit rounded-md"
    >
      ADD TO BAG
    </button>
  );
}
