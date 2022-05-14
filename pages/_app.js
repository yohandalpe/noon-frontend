import { GlobalStyles } from "../styles/global-styles";
import Layout from "../components/layout";
import "font-awesome/css/font-awesome.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
