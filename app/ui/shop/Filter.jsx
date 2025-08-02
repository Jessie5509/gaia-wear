"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Filter({ categories, initialFilters }) {
  const [filters, setFilters] = useState(initialFilters);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          newSearchParams.set(key, value);
        } else {
          newSearchParams.delete(key);
        }
      });

      router.push(`?${newSearchParams.toString()}`, { scroll: false });
    }, 600);

    return () => clearTimeout(timeout);
  }, [filters, router, searchParams]);

  const handleClearFilter = (key) => {
    const updatedFilters = { ...filters, [key]: "" };
    setFilters(updatedFilters);
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete(key);

    router.push(`?${newSearchParams.toString()}`, { scroll: false });
  };

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  const FilterContent = () => (
    <section className="min-w-[15dvw] max-w-fit mx-8 mt-10">
      <aside className="flex flex-col">
        <label htmlFor="Category">Categories</label>
        <hr />
        <ul>
          {categories.map((category) => (
            <li key={category.id} className="mt-3">
              <input
                type="radio"
                name="category"
                value={category.name}
                className="m-1 align-bottom"
                onChange={handleFilterChange}
                checked={filters.category === category.name}
              />
              {category.name}
            </li>
          ))}
        </ul>
        <hr />

        <label htmlFor="Price">Price</label>
        <div className="relative">
          <input
            type="range"
            name="price"
            min="0"
            max="1000"
            value={filters.price}
            onChange={handleFilterChange}
          />
          <span
            className="absolute top-[-20px] left-0 right-0 text-center"
            style={{
              left: `calc(${(filters.price / 1000) * 100}% - 20px)`,
            }}
          >
            ${filters.price}
          </span>
        </div>

        <hr />
        <label htmlFor="Sort">Sort</label>
        <select name="sort" value={filters.sort} onChange={handleFilterChange}>
          <option value="">Sort</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </aside>
    </section>
  );

  return (
    <>
      <main>
        <article className="flex flex-row gap-3 mt-8 mx-5">
          {Object.entries(filters)
            .filter(([_, value]) => value)
            .map(([key, value]) => (
              <p
                key={key}
                className="w-fit border rounded-lg flex items-baseline justify-center bg-[#D9D9D5] px-1 py-1"
              >
                <button
                  className="flex items-baseline"
                  onClick={() => handleClearFilter(key)}
                >
                  {value}
                  <p className="ml-1 bg-close bg-no-repeat bg-cover w-[0.6rem] h-[0.6rem]"></p>
                </button>
              </p>
            ))}
        </article>

        <div className="flex md:hidden justify-center my-4">
          <button
            onClick={toggleMobileFilter}
            className="flex items-center gap-2 px-8 py-2 bg-filter bg-no-repeat text-black rounded-md"
          >
            All Filters
          </button>
        </div>

        <div className="hidden md:block">
          <FilterContent />
        </div>
      </main>

      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={toggleMobileFilter}
          ></div>

          <div className="fixed top-0 left-0 right-0 bottom-0 bg-white overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white">
              <h2 className="text-lg font-semibold uppercase tracking-wide">
                Filters
              </h2>
              <button
                onClick={toggleMobileFilter}
                className="w-6 h-6 flex items-center justify-center"
                aria-label="Cerrar filtros"
              >
                <span className="w-5 h-0.5 bg-black rotate-45 absolute"></span>
                <span className="w-5 h-0.5 bg-black -rotate-45 absolute"></span>
              </button>
            </div>

            <div className="pb-6">
              <FilterContent />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
