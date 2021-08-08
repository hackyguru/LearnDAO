import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
