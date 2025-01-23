import React from "react";

export default function Button({text}) {
  return (
    <main className="flex justify-center">
      <button className="bg-green-900 text-white px-5 py-3 w-full min-h-fit rounded-md">{text}</button>
    </main>
  );
}
