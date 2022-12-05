import "../styles/globals.css";
import Acceptcookie from "../components/acceptcookie";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Acceptcookie button="Accept & Close" url="/cookies" left={true} />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
