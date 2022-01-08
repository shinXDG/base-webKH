import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>YOYO xăng dầu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/app_icon.png" />
        <meta name="keywords" content="YOYO xăng dầu" />
        <meta name="description" content="YOYO xăng dầu" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
