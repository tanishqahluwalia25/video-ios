import "../styles/globals.css";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="http://cdn.dashjs.org/v3.1.0/dash.all.debug.js" />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
