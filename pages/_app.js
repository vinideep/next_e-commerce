import ShopContextProvider from "../context/shopContext";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Nav from "../components/Nav";
function MyApp({ Component, pageProps }) {
  return (
    <ShopContextProvider>
         <Nav />
      <div className="lg:max-w-screen-2xl lg:w-full lg:m-auto md:m-auto lg:shadow-xl lg:px-6 lg:py-6">
        <Component {...pageProps} />
      </div>
    </ShopContextProvider>
  );
}
export default MyApp;
