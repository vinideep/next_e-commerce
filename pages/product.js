import { ShopContext } from "../context/shopContext";
import React, { useContext } from "react";
import Link from "next/link";

const product = () => {
  const contextData = useContext(ShopContext);
  return (
    <div>
      <div className="bg-white shadow-lg mt-12 w-full p-2 flex sticky top-14">
        <span className="w-12 flex justify-end items-center text-gray-700 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <input
          className="w-full rounded p-2 outline-none"
          type="text"
          placeholder="Try 'Summer Outfits'"
        />
        <button className="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
          <p className="font-semibold text-xs">Search</p>
        </button>
      </div>
      <div className="w-full lg:flex lg:flex-wrap lg:justify-around z-0 ">
        <div className="mt-16 mb-8 w-full ">
          
          <h1 className="text-center text-4xl text-gray-600 p-2 border-2 mt-20 uppercase">
            Products
          </h1>
        </div>
      </div>
      <div className="w-full lg:flex lg:flex-wrap lg:justify-center md:justify-center md:flex md:flex-wrap md:p-2 ">
        {contextData ? (
          contextData.products.map((product, index) => (
            <div
              key={index}
              className="lg:w-1/4 md:w-1/2 w-5/6  lg:h-1/4  m-auto mb-6 border-2 lg:m-10 sm:w-3/4 text-center border-gray-100 overflow-hidden shadow-xl hover:shadow-md "
            >
              <Link href={`/product/[product]`} as={`/product/${product.id}`}>
                <a>
                  <img
                    className="block bg-cover bg-center object-cover w-full border-b-2"
                    src={product.image.sourceUrl}
                    alt="Product"
                  />
                </a>
              </Link>
              <h1 className="uppercase font-semibold text-xl cursor-pointer p-2 hover:text-red-500">
                <Link href={`/product/[product]`} as={`/product/${product.id}`}>
                  <a>{product.name}</a>
                </Link>
              </h1>
              <p className="text-red-500 p-2">
                Regular Price: <del>{product.regularPrice}</del>
              </p>
              <p className="text-green-500 p-2">Offer Price: {product.price}</p>

              {!contextData.store.find((item) => item.id === product.id)
                ?.quantity ?? 0 ? (
                <button
                  className="text-gray-200 lg:p-2 w-full md:py-5 py-2 text-xl mt-7 bg-gray-800 hover:shadow-xl"
                  onClick={() => {
                    contextData.addProductToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="flex justify-between pb-6">
                  <button
                    className="bg-gray-800 px-4 text-center py-2 text-white text-2xl md:py-4 md:px-6 lg:px-5 lg:py-2 m-auto rounded-lg"
                    onClick={() => {
                      contextData.decrement(product);
                    }}
                  >
                    -
                  </button>
                  <span className="m-auto px-6 bg-gray-50">
                    {contextData.store.map((item) =>
                      item.id === product.id ? item.quantity : null
                    )}
                  </span>
                  <button
                    className="bg-gray-800 px-3 text-center py-2 text-white text-2xl md:py-4 md:px-6 lg:px-4 lg:py-2 m-auto rounded-lg"
                    onClick={() => {
                      contextData.addProductToCart(product);
                    }}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default product;