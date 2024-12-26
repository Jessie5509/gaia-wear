import React from "react";

export default function Button({text}) {
  return (
    <main className="flex justify-center">
      <div className="bg-green-900 text-white px-5 py-3 w-full min-h-fit rounded-md">{text}</div>
    </main>
  );
}
