import React, { useContext, useState } from "react";
import { signOut, useSession } from "next-auth/client";
import { ShopContext } from "../context/shopContext";
import Link from "next/link";
import styles from "./Nav.module.css";
const Nav = () => {
  const contextData = useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false);
  const [session, loading] = useSession();
  const [dropdown, setDropdown] = useState(false);

  const navtoggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <nav className="flex items-center flex-wrap p-2 z-10 bg-white fixed top-0 w-full">
        {/* logo */}
        <Link href="/">
          <a className="inline-flex p-2 m- transition-all">
            <img
              className="lg:w-10 lg:px-2 md:w-5 md:mx-2 w-3"
              src="./svg/pagelines-brands.svg"
              alt="style"
            />
            <h1 className="lg:text-2xl md:text-3xl font-extrabold text-gray-700 lg:tracking-wider uppercase">
              TEXSOUL FASHIONS
            </h1>
            <img
              className="lg:w-10 lg:px-2 md:w-5 md:mx-2 w-3"
              src="./svg/pagelines-brands.svg"
              alt="style"
            />
          </a>
        </Link>
        {/* logo ends */}
        {/* cart Icon */}
        <div className="flex ml-auto">
          <Link href="/cart">
            <a
              className="inline-flex p-2 ml-auto lg:hidden"
              onClick={() => (isOpen ? navtoggle() : null)}
            >
              <img
                className="lg:w-7 lg:z-10 md:w-7 w-5 mx-2 animate-pulse"
                src="./svg/shopping-cart-solid.svg"
                alt="style"
              />
              <sub className="  ">{contextData.value}</sub>
            </a>
          </Link>
          {/* cart Icon ends */}
          {/* hamburger menu bar */}
          <div
            className="inline-flex p-3 hover:bg-gray-400 rounded-lg lg:hidden ml-auto"
            onClick={() => {
              navtoggle();
            }}
          >
            <img
              className="md:w-6 w-5"
              src="./svg/bars-solid.svg"
              alt="style"
            />
          </div>
        </div>
        {/* hamburger menu bar ends */}
        {/* list of menu starts */}
        <div
          className={
            isOpen
              ? "w-full lg:inline-flex lg:flex-grow lg:w-auto"
              : "w-full lg:inline-flex lg:flex-grow lg:w-auto hidden"
          }
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col ">
            <Link href="/cart">
              <a className="lg:inline-flex lg:w-auto font-semibold text-gray-600 text-lg px-4 py-2 rounded hover:shadow-xl hidden  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <img
                  className="lg:w-7 lg:z-10 w-7 mx-2 animate-pulse"
                  src="./svg/shopping-cart-solid.svg"
                  alt="style"
                />
                <sub className="  ">{contextData.value}</sub>
              </a>
            </Link>
            <Link href="/">
              <a
                className="lg:inline-flex lg:w-auto font-semibold text-gray-600 text-lg px-4 py-2 rounded hover:text-gray-900 hover:shadow-xl
              transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={() => {
                  navtoggle();
                }}
              >
                <h3>HOME</h3>
              </a>
            </Link>

            <Link href="/">
              <a
                className="lg:inline-flex lg:w-auto font-semibold text-gray-600 text-lg px-4 py-2 rounded hover:text-gray-900 hover:shadow-xl  transition duration-300 ease-in-out transform hover:rotate-3 hover:-translate-y-1 hover:scale-110"
                onClick={() => {
                  navtoggle();
                }}
              >
                <h3>PRODUCTS</h3>
              </a>
            </Link>

            <Link href="/about">
              <a
                className="lg:inline-flex lg:w-auto font-semibold text-gray-600 text-lg px-4 py-2 rounded hover:text-gray-900 hover:shadow-xl  transition duration-300 ease-in-out transform hover:-rotate-3 hover:-translate-y-1 hover:scale-110"
                onClick={() => {
                  navtoggle();
                }}
              >
                <h3>ABOUT</h3>
              </a>
            </Link>
            {session && session.user && session.user.name ? (
              <div>
                <h3
                  onClick={() => setDropdown(!dropdown)}
                  className="login lg:inline-flex items-center cursor-pointer lg:w-auto uppercase cursor:pointer font-semibold text-gray-600 text-lg px-4 py-2 rounded hover:text-gray-900 hover:shadow-xl  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                  {session.user.name}
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </h3>
                  <h3
                    className={
                      !dropdown
                        ? "lg:block lg:w-auto font-semibold w-24 text-gray-600 text-lg px-4 py-2 rounded hover:text-gray-900 hover:shadow-xl  transition duration-300 ease-in-out transform cursor-pointer hover:-translate-y-1 hover:scale-110"
                        : "hidden"
                    }
                    onClick={() => signOut()}
                  >
                    Sign out
                  </h3>
                </div>
            ) : (
              <Link href="/login">
                <a
                  className="lg:inline-flex lg:w-auto uppercase font-semibold text-gray-600 text-lg px-4 py-2 rounded hover:text-gray-900 hover:shadow-xl  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  onClick={() => {
                    navtoggle();
                  }}
                >
                  <h3>LOGIN</h3>
                </a>
              </Link>
            )}
          </div>
        </div>
        {/* list of menu ends */}
      </nav>
    </header>
  );
};
export default Nav;
