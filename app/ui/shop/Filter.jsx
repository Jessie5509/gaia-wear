"use client";
import React, { useState } from "react";

export default function Filter({ data, onApplyFilter }) {
  const [activeTag, setActiveTag] = useState(["hat", "shoes"]);
  const [filters, setFilters] = useState({
    category: "",
    color: "",
    price: "",
    size: "",
    sort: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // const applyFilter = () => {
  //   // Filtra los productos con base en los filtros seleccionados
  //   onApplyFilter(filters);
  // };
  // const applyFilter = () => {
  //   const filteredProducts = products.filter(
  //     (product) => product.category === selectedCategory
  //   );
  //   return filteredProducts;
  // };
  return (
    // <section className="w-[10dvw] mx-5">
    //   <aside className="flex flex-col">
    //     <label htmlFor="Category">Category</label>
    //     <hr />
    //     <ul>
    //       {/* Buscar userouter y como hacer con vercel */}
    //       <li>Hat</li>
    //       <li>Jacket</li>
    //     </ul>
    //     <label htmlFor="Color">Color</label>
    //     <input type="color" />
    //     <label htmlFor="Price">Price</label>
    //     <input type="range" />
    //     <label htmlFor="Size">Size</label>
    //     <select name="size">
    //       Size
    //       <option value="someOption">Some option</option>
    //     </select>
    //     <select name="sort">
    //       Sort
    //       <option value="sort">Sort</option>
    //     </select>
    //   </aside>
    //   <article className="flex flex-row gap-3 mt-20">
    //     {activeTag.map((tag, index) => (
    //       <span
    //         key={index}
    //         className="w-fit border flex items-center justify-center content-center"
    //       >
    //         <button>{tag}ₓ</button>
    //       </span>
    //     ))}
    //   </article>
    //   <button onClick={applyFilter}>Apply Filters</button>
    // </section>
    <section className="w-[10dvw] mx-5 mt-20">
      <aside className="flex flex-col">
        <label htmlFor="Category">Categories</label>
        <hr />
        <ul>
          {data.map((category, index) => (
            <li key={category.id}>
              <input
                type="radio"
                name="category"
                value={category}
                onChange={handleFilterChange}
              />
              {category.name}
            </li>
          ))}
        </ul>

        <label htmlFor="Color">Color</label>
        <input type="color" name="color" onChange={handleFilterChange} />

        <label htmlFor="Price">Price</label>
        <input
          type="range"
          name="price"
          min="0"
          max="1000"
          onChange={handleFilterChange}
        />

        <label htmlFor="Size">Size</label>
        <select name="size" onChange={handleFilterChange}>
          <option value="">Select Size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>

        <label htmlFor="Sort">Sort</label>
        <select name="sort" onChange={handleFilterChange}>
          <option value="">Sort</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </aside>

      <article className="flex flex-row gap-3 mt-20">
        {activeTag.map((tag, index) => (
          <span
            key={index}
            className="w-fit border flex items-center justify-center content-center"
          >
            <button>{tag}ₓ</button>
          </span>
        ))}
      </article>

      {/* <button onClick={applyFilter}>Apply Filters</button> */}
    </section>
  );
}
