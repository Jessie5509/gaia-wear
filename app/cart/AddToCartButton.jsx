"use client";
export default function AddToCartButton({ product }) {
  const addToCart = () => {
    try {
      // Leer el carrito actual del localStorage
      const storedCart = JSON.parse(localStorage.getItem("usercart")) || [];
      console.log("usercart inicial:", storedCart);

      // Verificar si el producto ya existe en el carrito
      const existingProductIndex = storedCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        // Producto ya existe, actualizar cantidad y precio total
        storedCart[existingProductIndex].quantity += 1;
        storedCart[existingProductIndex].total_price =
          storedCart[existingProductIndex].price *
          storedCart[existingProductIndex].quantity;

        console.log(
          "Producto existente actualizado:",
          storedCart[existingProductIndex]
        );
      } else {
        // Producto no existe, agregar al carrito
        const newProduct = {
          ...product,
          quantity: 1,
          total_price: product.price,
        };
        storedCart.push(newProduct);

        console.log("Nuevo producto agregado al carrito:", newProduct);
      }

      // Guardar el carrito actualizado en localStorage
      localStorage.setItem("usercart", JSON.stringify(storedCart));
      console.log("Carrito actualizado:", storedCart);
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
    }
  };

  return (
    <button
      onClick={addToCart}
      className="bg-green-900 text-white px-5 py-3 w-full min-h-fit rounded-md"
    >
      ADD TO BAG
    </button>
  );
}
