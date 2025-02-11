import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Head>
        <link rel="icon" href="/KC.png" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
