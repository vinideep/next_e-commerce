import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ShopContext } from "../../context/shopContext";
import ReactImageMagnify from "react-image-magnify";
// description
const Description = () => {
  const router = useRouter();
  const contextData = useContext(ShopContext);
  const [product, setProduct] = useState();
  useEffect(() => {
    const product = contextData.products.find(
      (product) => product.id === +router.query.product
    );
    setProduct(product);
  }, []);

  return (
    <div>
      <h1 className="mt-20 border-b-2 p-2 text-center text-2xl font-bold text-gray-600 tracking-wide">
        Product Detail
      </h1>
      {product && product.id ? (
        <div className="lg:my-6 lg:mt-12 border-2 lg:flex md:block lg:border- py-10 m-auto">
          <div className=" m-auto z-10 lg:shadow-2xl hover:shadow-xl rounded-md p-2 md:w-8/12 lg:w-3/12 ">
            <ReactImageMagnify
              {...{
                smallImage: {
                  imageStyle: { width: "50%" },
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: product.image.sourceUrl,
                  width: 300,
                  height: 450,
                },
                largeImage: {
                  src: product.image.sourceUrl,
                  width: 1200,
                  height: 1800,
                },
                enlargedImageContainerDimensions: {
                  width: "200%",
                  height: "140%",
                },
                enlargedImageContainerClassName: "-mt-32 mb-24 w-full",
              }}
            />
          </div>
          <div className="lg:block flex z-0 bg-white shadow-xl">
            <ul className="flex m-auto lg:block">
              <li>
                <img
                  onClick={() => {}}
                  className="lg:w-20 w-14 md:w-24 m-2 shadow-md cursor-pointer sm:w-24 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
                  src={product.image.sourceUrl}
                  alt="item"
                />
              </li>
              <li>
                <img
                  onClick={() => {}}
                  className="lg:w-20 w-14 md:w-24 m-2 shadow-md cursor-pointer sm:w-24 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
                  src={product.image.sourceUrl}
                  alt="item"
                />
              </li>
              <li>
                <img
                  onClick={() => {}}
                  className="lg:w-20 w-14 md:w-24 m-2 shadow-md cursor-pointer sm:w-24 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
                  src={product.image.sourceUrl}
                  alt="item"
                />
              </li>
              <li>
                <img
                  onClick={() => {}}
                  className="lg:w-20 w-14 md:w-24 m-2 shadow-md cursor-pointer sm:w-24 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
                  src={product.image.sourceUrl}
                  alt="item"
                />
              </li>
              <li>
                <img
                  onClick={() => {}}
                  className="lg:w-20 w-14 md:w-24 m-2 shadow-md cursor-pointer sm:w-24 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
                  src={product.image.sourceUrl}
                  alt="item"
                />
              </li>
            </ul>
          </div>
          <div className="block lg:w-2/3 px-6">
            <h1 className="font-extrabold text-gray-600 border-b-4 my-4 text-left lg:text-4xl text-2xl lg:p- m-auto">
              {product.name}
            </h1>

            <h1 className="border-b-4  border-red-500 text-xl w-28 font-bold text-gray-600 tracking-wider py-2 ">
              Description
            </h1>
            <p className="lg:m-auto py-10 lg:text-lg md:text-lg text-md font-medium text-justify">
              {product.description}
            </p>
            <p className="font-extrabold text-left text-lg pr-2 py-2 m-auto transition duration-1000 ease-in-out text-red-500">
              Regular Price: <del>{product.regularPrice}</del>
            </p>
            <p className="font-extrabold text-green-600 text-left text-xl py-2 pr-2 m-auto">
              Offer Price: {product.price}
            </p>
            <div className="flex flex-wrap items-center">
              <Link href="/cart">
                <a
                  className="text-gray-700 bg-gradient-to-t border-2 lg:p-2 md:py-3 sm:py-3 py-2 sm:mb-4 sm:w-full w-full lg:w-1/4 lg:ml-auto md:ml-auto
                  text-xl from-yellow-500 to-yellow-300 hover:shadow-xl text-center font-bold outline:none"
                  onClick={() => {
                    contextData.addProductToCart(product);
                  }}
                >
                  <h1> Buy Now</h1>
                </a>
              </Link>
              {!contextData.store.find((item) => item.id === product.id)
                ?.quantity ?? 0 ? (
                <button
                  className="text-gray-200 ml-auto items-center lg:w-1/4 lg:p-2 w-full md:py-5 sm:py-3 py-2 sm:mb-4 text-xl bg-gray-800 hover:shadow-xl"
                  onClick={() => {
                    contextData.addProductToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="flex justify-between pb-6 ml-auto w-full lg:w-1/4">
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
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Description;
