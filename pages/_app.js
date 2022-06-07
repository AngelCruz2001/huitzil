import { MoralisProvider } from "react-moralis";
import 'normalize.css/normalize.css';
import {Layout} from '../components/Layout'
import { Provider } from "react-redux";
import { store } from "../store/store";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  config.autoAddCss = false
  return (
    <Provider store={store}>
      <MoralisProvider initializeOnMount={false} >

        <Layout>
          <Component {...pageProps} />
        </Layout>

      </MoralisProvider>
    </Provider>
  )
}

export default MyApp
