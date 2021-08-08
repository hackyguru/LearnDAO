import Header from "../components/Header";
import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;