import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

// https://nextjs.org/docs/advanced-features/custom-app
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
