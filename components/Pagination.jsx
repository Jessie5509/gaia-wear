"use client";
import { useState } from "react";
import Card from "./Card.jsx";
import { paginate } from "../app/lib/utils.ts";

export default function Pagination({ items }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  const paginatedProd = paginate(items, currentPage, pageSize);
  const pagesCount = Math.ceil(items.length / pageSize);
  const pages = Array.from({ length: pagesCount }, (_, index) => index + 1);

  const onPageChange = (page) => {
    if (page < 1 || page > pagesCount) return;
    setCurrentPage(page);
  };

  return (
    <main>
      <section className="flex flex-row items-center">
        <Card prod={paginatedProd} />
      </section>
      <section className="flex justify-center my-10">
        {items.length > pageSize && (
          <section className="flex justify-center my-10">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-arrow-left bg-no-repeat bg-center w-8 h-8 p-1 disabled:opacity-50"
              />

              {pages.map((page) => (
                <button
                  key={page}
                  onClick={() => onPageChange(page)}
                  className={`
                  px-3 py-1 transition font-main
                  ${
                    currentPage === page
                      ? "bg-primary text-white rounded-full"
                      : "text-gray-700 rounded-full hover:bg-gray-200"
                  }
                `}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === pagesCount}
                className="bg-arrow-right bg-no-repeat bg-center w-8 h-8 p-1 disabled:opacity-50"
              />
            </nav>
          </section>
        )}
      </section>
    </main>
  );
}
