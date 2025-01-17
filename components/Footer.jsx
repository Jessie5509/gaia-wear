import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-400 flex flex-col justify-between">
      <main className="p-7 my-10">
        <section className="flex flex-row justify-around">
          <section className="flex flex-col">
            <span className="text-center font-extrabold">Support</span>
            <hr />
            <article className="flex flex-col items-center mt-8">
              <a className="mb-2" href="/">
                contact
              </a>
              <a className="mb-2" href="/">
                help centre
              </a>
              <a className="mb-2" href="/">
                shipping
              </a>
              <a className="mb-2" href="/">
                returns & exchanges
              </a>
              <a className="mb-2" href="/">
                refer a friend
              </a>
              <a className="mb-2" href="/">
                rewards
              </a>
              <a className="mb-2" href="/">
                FAQ
              </a>
            </article>
          </section>

          <section className="flex flex-col">
            <span className="text-center font-extrabold">Company</span>
            <hr />
            <article className="flex flex-col items-center mt-8">
              <a className="mb-2" href="/">
                about us
              </a>
              <a className="mb-2" href="/">
                ethical manufacturing
              </a>
              <a className="mb-2" href="/">
                sustainability and impact
              </a>
              <a className="mb-2" href="/">
                responsible packaging
              </a>
              <a className="mb-2" href="/">
                fit guide
              </a>
              <a className="mb-2" href="/">
                affiliate program
              </a>
              <a className="mb-2" href="/">
                become a retailer
              </a>
            </article>
          </section>

          <section className="flex flex-col">
            <span className="text-center font-extrabold">Connect</span>
            <hr />
            <article className="flex flex-col items-center mt-8">
              <a className="mb-2" href="/">
                Instagram
              </a>
              <a className="mb-2" href="/">
                Facebook
              </a>
              <a className="mb-2" href="/">
                YouTube
              </a>
            </article>
          </section>
        </section>
      </main>
      <section className="flex justify-center border-white w-full h-5">
        <hr />
        <article>
          © 2024. All Rights Reserved. Privacy Policy & Copyright Policy. Terms
          and Conditions.
        </article>
      </section>
    </footer>
  );
}
