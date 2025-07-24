export type Product = {
  id: number;
  name: string;
  description: string;
  review: number;
  price: number;
  material: string;
  stock: number;
  color: number;
  image_url: string;
};

export type Category = {
  id: number;
  name: string;
  description: string;
};

export type ProductCategory = {
  product_id: number;
  category_id: number;
};

export type CartItem = {
  id: number;
  product_id: number;
  quantity: number;
  total_price: number;
};

export type Order = {
  id: number;
  total_amount: number;
  order_status: "pending" | "shipped" | "delivered";
  created_at: string;
};

export type OrderItem = {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
};

export type ProductTable = {
  id: number;
  name: string;
  description: string;
  review: number;
  price: number;
  material: string;
  stock: number;
  color: string[];
  size: string[];
  image_url: string;
};

export type CartItemsTable = {
  id: number;
  product_id: number;
  quantity: number;
  total_price: number;
};

export type OrdersTable = {
  id: number;
  total_amount: number;
  order_status: "pending" | "shipped" | "delivered";
  created_at: string;
};

export type OrderItemsTable = {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
};

export type CategoryField = {
  id: number;
  name: string;
};

export type ProductCategoryField = {
  product_id: number;
  category_id: number;
};
