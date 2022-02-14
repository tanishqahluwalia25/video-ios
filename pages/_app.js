import "../styles/globals.css";
import Script from "next/script";
import ClientOnly from "../components/ClientOnly";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Script src="http://cdn.dashjs.org/v3.1/.0/dash.all.debug.js" /> */}

      <ClientOnly>
        <Component {...pageProps} />
      </ClientOnly>
    </>
  );
}

export default MyApp;
