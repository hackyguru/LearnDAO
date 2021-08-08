import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
