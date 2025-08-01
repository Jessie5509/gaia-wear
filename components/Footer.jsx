import React from "react";
import Image from "next/image";
import Facebook from "../public/footer/fc.svg";
import Instagram from "../public/footer/ig.svg";
import Youtube from "../public/footer/yt.svg";
import Visa from "../public/footer/visa.svg";
import Master from "../public/footer/master.svg";
import American from "../public/footer/express.svg";
import PayPal from "../public/footer/paypal.svg";
import Gpay from "../public/footer/gpay.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-400 flex flex-col justify-between">
      <main className="p-7 my-10">
        <section className="flex flex-row max-sm:flex-col max-sm:justify-center max-sm:text-center justify-around">
          <section className="flex flex-col">
            <span className="font-extrabold mb-5">Support</span>
            <hr />
            <article className="flex flex-col items-start mt-8 max-sm:items-center">
              <a className="mb-3" href="/">
                contact
              </a>
              <a className="mb-3" href="/">
                help center
              </a>
              <a className="mb-3" href="/">
                shipping
              </a>
              <a className="mb-3" href="/">
                returns & exchanges
              </a>
              <a className="mb-3" href="/">
                refer a friend
              </a>
              <a className="mb-3" href="/">
                rewards
              </a>
              <a className="mb-3" href="/">
                FAQ
              </a>
            </article>
            <article className="flex justify-center max-sm:items-center">
              <Image
                src="/footer/dark-logo.svg"
                width={100}
                height={100}
                alt="Logo"
              />
            </article>
          </section>

          <section className="flex flex-col">
            <span className="font-extrabold mb-5">Company</span>
            <hr />
            <article className="flex flex-col items-start mt-8 max-sm:items-center">
              <a className="mb-3" href="/">
                about us
              </a>
              <a className="mb-3" href="/">
                ethical manufacturing
              </a>
              <a className="mb-3" href="/">
                sustainability and impact
              </a>
              <a className="mb-3" href="/">
                responsible packaging
              </a>
              <a className="mb-3" href="/">
                fit guide
              </a>
              <a className="mb-3" href="/">
                affiliate program
              </a>
              <a className="mb-3" href="/">
                become a retailer
              </a>
            </article>

            <article className="flex flex-row items-center justify-start gap-4 mt-1 max-sm:justify-center max-sm:mb-10">
              <a className="mb-2" href="/">
                <Facebook />
              </a>
              <a className="mb-2" href="/">
                <Instagram />
              </a>
              <a className="mb-2" href="/">
                <Youtube />
              </a>
            </article>
          </section>

          <section className="flex flex-col max-w-[14dvw] max-sm:max-w-none">
            <span className="font-extrabold mb-5">Connect</span>
            <hr />
            <article className="mt-8">
              <header>JOIN GAIA'S EMAIL & TEXT LISTS TO GET 15% OFF!</header>
              <p className="my-2">
                Sign up for insider info on sales, new arrivals, and more.
              </p>

              <input
                type="text"
                placeholder="Email address"
                className="border-solid mb-2 border-gray-500 w-[14dvw] max-sm:w-full"
              />
              <input
                type="number"
                placeholder="US phone number"
                className="border-solid mb-2 border-gray-500 w-[14dvw] max-sm:w-full"
              />
              <p className="text-xs mt-2">
                By submitting this form, you agree to receive recurring
                automated promotional and personalized marketing text messages
                (e.g. cart reminders) from GaiaWear at the cell number used when
                signing up. Consent is not a condition of any purchase. Reply
                HELP for help.
              </p>
              <button className="text-base text-white w-[14dvw] bg-primary rounded-full py-2 px-2 max-sm:w-[20dvw] max-sm:mt-5">
                SEND
              </button>
            </article>
          </section>
        </section>
      </main>
      <hr />
      <section className="flex flex-row justify-center my-5 gap-2">
        <American />
        <Gpay />
        <Master />
        <PayPal />
        <Visa />
      </section>
      <hr />
      <section className="flex justify-center w-full h-5 my-5 max-sm:items-center max-sm:justify-center max-sm:m-6 max-sm:max-w-fit max-sm:text-center">
        <article>
          © {currentYear}. All Rights Reserved. Privacy Policy & Copyright
          Policy. Terms and Conditions.
        </article>
      </section>
    </footer>
  );
}
