const products = [
  {
    id: 1,
    name: "Organic Cotton T-Shirt",
    description:
      "A soft, breathable, and eco-friendly T-shirt made from 100% organic cotton. A versatile staple for any wardrobe.",
    price: 35,
    material: "100% Organic Cotton",
    stock: 200,
    color: "Natural White",
    size: "S, M, L, XL",
    image_url: "/products/organic-cotton-tshirt.png",
  },
  {
    id: 2,
    name: "Organic Cotton Hoodie",
    description:
      "A cozy hoodie made from 100% organic cotton, perfect for cool days. Soft and sustainable, a great addition to any outfit.",
    price: 75,
    material: "100% Organic Cotton",
    stock: 150,
    color: "Earth Brown",
    size: "S, M, L, XL",
    image_url: "/products/organic-cotton-hoodie.png",
  },
  {
    id: 3,
    name: "Recycled Polyester Joggers",
    description:
      "Comfortable joggers made from 100% recycled polyester, offering flexibility and style while being environmentally friendly.",
    price: 60,
    material: "100% Recycled Polyester",
    stock: 120,
    color: "Recycled Charcoal",
    size: "S, M, L, XL",
    image_url: "/products/recycled-polyester-joggers.png",
  },
  {
    id: 4,
    name: "Linen Shorts",
    description:
      "Light and breathable shorts made from organic linen, ideal for warm days. Stylish and sustainable for everyday wear.",
    price: 50,
    material: "100% Organic Linen",
    stock: 100,
    color: "Soft Beige",
    size: "S, M, L, XL",
    image_url: "/products/linen-shorts.png",
  },
  {
    id: 5,
    name: "Organic Cotton Cap",
    description:
      "An eco-friendly cap made from 100% organic cotton. A simple yet stylish accessory that complements your sustainable lifestyle.",
    price: 25,
    material: "100% Organic Cotton",
    stock: 180,
    color: "Natural Beige",
    size: "Adjustable",
    image_url: "/products/organic-cotton-cap.png",
  },
  {
    id: 6,
    name: "Recycled Fabric Sweatpants",
    description:
      "Sustainable sweatpants made from 100% recycled fabric, offering comfort and eco-conscious style for lounging or casual outings.",
    price: 55,
    material: "100% Recycled Fabric",
    stock: 130,
    color: "Slate Grey",
    size: "S, M, L, XL",
    image_url: "/products/recycled-fabric-sweatpants.png",
  },
  {
    id: 7,
    name: "Organic Hemp Beanie",
    description:
      "A cozy, warm beanie made from organic hemp. Perfect for cooler weather, with a sustainable, eco-friendly design.",
    price: 30,
    material: "Organic Hemp",
    stock: 70,
    color: "Forest Green",
    size: "One size",
    image_url: "/products/organic-hemp-beanie.png",
  },
];

const categories = [
  {
    id: 1,
    name: "Shirt",
    description:
      "Eco-friendly shirts made from organic materials like cotton, perfect for casual wear.",
  },
  {
    id: 2,
    name: "Jacket",
    description:
      "Sustainable jackets made from organic and recycled materials for the cooler days.",
  },
  {
    id: 3,
    name: "Hat",
    description:
      "Stylish hats made from eco-conscious materials, designed for sun protection and fashion.",
  },
  {
    id: 4,
    name: "Beanies",
    description:
      "Warm beanies made from organic materials like hemp and cotton, perfect for colder weather.",
  },
  {
    id: 5,
    name: "Pants",
    description:
      "Sustainable pants made from organic cotton and recycled fabrics, designed for comfort and style.",
  },
  {
    id: 6,
    name: "Shorts",
    description:
      "Lightweight and breathable shorts made from organic fabrics, ideal for warm weather.",
  },
  {
    id: 7,
    name: "Accessories",
    description:
      "Eco-friendly accessories like caps, bags, and scarves made from sustainable materials.",
  },
  {
    id: 8,
    name: "Sweater",
    description:
      "Cozy and warm sweaters made from organic and recycled materials, perfect for layering.",
  },
];

const productCategories = [
  { product_id: 1, category_id: 1 },
  { product_id: 2, category_id: 2 },
  { product_id: 3, category_id: 5 },
  { product_id: 4, category_id: 6 },
  { product_id: 5, category_id: 3 },
  { product_id: 6, category_id: 5 },
  { product_id: 7, category_id: 4 },
];

export { products, categories, productCategories };
