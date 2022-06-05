// import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";
import 'normalize.css/normalize.css';
function MyApp({ Component, pageProps }) {


  return (
    <MoralisProvider initializeOnMount={false} >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
