import Header from "../components/Header";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Navbar />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;