
import Footer from '../components/navigation/Footer'
import Header from '../components/navigation/Header'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
