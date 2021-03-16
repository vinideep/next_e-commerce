import React, { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    image: {
      sourceUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg",
    },
    name: "New Product 1",
    price: "£10.00",
    regularPrice: "£16.00",
    quantity: 0,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    image: {
      sourceUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7189947/2018/8/30/b0a17130-00b2-47dd-9acf-75fcdf7333111535614137835-Bene-Kleed-Men-Off-White--Blue-Slim-Fit-Printed-Casual-Shirt-3181535614137565-1.jpg",
    },
    name: "New Product 2",
    price: "£10.00",
    regularPrice: "£16.00",
    quantity: 0,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    image: {
      sourceUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1265392/2020/1/20/12fc0ced-84b7-4933-8cbc-5a7832c7686e1579504849580-Highlander-Black-Slim-Fit-Casual-Shirt-2521579504847937-1.jpg",
    },
    name: "New Product 3",
    price: "£10.00",
    regularPrice: "£16.00",
    quantity: 0,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 4,
    image: {
      sourceUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1265399/2018/3/30/11522394285273-Highlander-Blue-Slim-Washed-Denim-Casual-Shirt-5701522394285017-1.jpg",
    },
    name: "New Product 4",
    price: "£10.00",
    regularPrice: "£16.00",
    quantity: 0,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 5,
    image: {
      sourceUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2948543/2018/3/30/11522394099790-HIGHLANDER-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-5171522394099590-1.jpg",
    },
    name: "New Product 5",
    price: "£10.00",
    regularPrice: "£16.00",
    quantity: 0,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 6,
    image: {
      sourceUrl:
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10456354/2019/8/22/d56e75f6-f1a7-4fdd-b430-51befb36f88d1566454760527-Campus-Sutra-Men-Colourblocked-Casual-Spread-Shirt-290156645-1.jpg",
    },
    name: "New Product 6",
    price: "£10.00",
    regularPrice: "£16.00",
    quantity: 0,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export const ShopContext = React.createContext();

const ShopContextProvider = (props) => {
  const [store, setStore] = useState([]);
  const [value, setValue] = useState(0);
  useEffect(() => {
    document.title = `cart ${value}`;
    setValue(store.reduce((acc, product) => acc + product.quantity, 0));
  }, [store, value]);
  // clear cart Function
  const clearCart = () => {
    setStore([]);
  };
  // Decrement Function

  const decrement = (product) => {
    setStore((prevStore) =>
      prevStore.find(({ id }) => id === product.id)?.quantity > 1
        ? prevStore.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        : prevStore.filter(({ id }) => id !== product.id)
    );
  };

  // Increment Function
  const addProductToCart = (product) =>
    !store.find(({ id }) => id === product.id)
      ? (setStore((prevData) => [...prevData, { ...product, quantity: 1 }]),
        setValue(value + 1))
      : setStore((prevStore) =>
          prevStore.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
  return (
    <ShopContext.Provider
      value={{ products, clearCart, addProductToCart, decrement, value, store }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
