import Theme from "/src/context/Theme.jsx";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Head>
        <title>WeMovies</title>
      </Head>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
