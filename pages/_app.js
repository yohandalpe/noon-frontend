import { GlobalStyles } from "../styles/global-styles";
import "font-awesome/css/font-awesome.css";

//import "../styles/post.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
