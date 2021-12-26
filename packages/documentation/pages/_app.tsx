import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@rezrah/figma-to-code-ui-styles/dist/button/button.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
