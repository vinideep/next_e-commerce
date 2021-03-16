import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ShopContext } from "../../context/shopContext";
import ReactImageMagnify from "react-image-magnify";
// description
const Description = () => {
  const router = useRouter();
  const contextData = useContext(ShopContext);
  const [isTrue, setIsTrue] = useState(false);
  const product = contextData.products.find(
    (product) => product.id === +router.query.product
  );
  return (
    <div>
      <h1 className="mt-20 border-b-2 p-2 text-center text-2xl font-bold text-gray-600 tracking-wide">
        Product Detail
      </h1>
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
                height: "100%",
              },
            }}
          />
        </div>
        <div className="lg:block flex z-0 bg-white shadow-xl">
          <ul className="flex m-auto lg:block">
            <li>
              <img
                onClick={() => {}}
                className="lg:w-20 w-14 md:w-24 m-2 shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
                src={product.image.sourceUrl}
                alt="item"
              />
            </li>
            <li>
              <img
                onClick={() => {}}
                className="lg:w-20 w-14 md:w-24 m-2 shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
                src={product.image.sourceUrl}
                alt="item"
              />
            </li>
            <li>
              <img
                onClick={() => {}}
                className="lg:w-20 w-14 md:w-24 m-2 shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
                src={product.image.sourceUrl}
                alt="item"
              />
            </li>
            <li>
              <img
                onClick={() => {}}
                className="lg:w-20 w-14 md:w-24 m-2 shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
                src={product.image.sourceUrl}
                alt="item"
              />
            </li>
            <li>
              <img
                onClick={() => {}}
                className="lg:w-20 w-14 md:w-24 m-2 shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
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
          <div className="flex flex-wrap">
            <Link href="/cart">
              <a
                className="text-gray-700 bg-gradient-to-t border-2 lg:p-2 md:py-3 sm:py-3 py-2 mb-4 sm:w-full w-full lg:w-1/4 lg:ml-auto md:ml-auto
          text-xl mb-1 from-yellow-500 to-yellow-300 hover:shadow-xl text-center font-bold outline:none"
                onClick={() => {
                  contextData.addProductToCart(product);
                }}
              >
                Buy Now
              </a>
            </Link>
            <button
              className={
                !isTrue
                  ? "text-gray-200 lg:p-2 md:py-3 sm:py-3 py-3 sm:w-full w-full py-2 lg:w-1/4 lg:ml-auto md:ml-auto text-xl mb-1 bg-gray-800 hover:shadow-xl text-center font-bold outline:none"
                  : "text-gray-700 lg:p-2 md:py-3 sm:py-3 py-3 sm:w-full w-full py-2 lg:w-1/4 lg:ml-auto md:ml-auto text-xl mb-1 bg-gray-300 hover:shadow-xl text-center font-bold pointer-events-none outline:none"
              }
              onClick={() => {
                contextData.addProductToCart(product);
                setIsTrue(!isTrue);
              }}
            >
              {!isTrue ? "Add to Cart" : "Added to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Description;
