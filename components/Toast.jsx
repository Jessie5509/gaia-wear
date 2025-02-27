import React, { useEffect, useState } from "react";

export default function Toast({ text }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;
  return (
    <main className="absolute bottom-0 right-10 w-64 h-28">
      <section
        id="toast-success"
        class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-gray-100 rounded-lg shadow-sm"
        role="alert"
      >
        <div class="inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg dark:bg-primary dark:text-green-200">
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
        </div>
        <div class="ms-3 text-sm font-normal">{text}</div>
        <button
          type="button"
          class="ms-auto -mx-1.5 -my-1.5 bg-gray-100 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
          data-dismiss-target="#toast-success"
          onClick={() => setIsVisible(false)}
          aria-label="Close"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </section>
    </main>
  );
}
