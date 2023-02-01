import Theme from "/src/context/Theme.jsx";
import Head from "next/head";

import CartProvider from "/src/context/Cart.jsx"

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Head>
        <title>WeMovies</title>
      </Head>
      <CartProvider>
      <Component {...pageProps} />
      </CartProvider>
    </Theme>
  );
}

export default MyApp;
