import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/main.css'


import type { AppProps } from 'next/app'
import {PageFrame} from "../components/PageFrame/PageFrame";
import {GlobalStore} from "../store";
import { ToastContainer } from 'react-toastify';



function MyApp({ Component, pageProps }: AppProps) {

  return (
      <GlobalStore>
          <PageFrame>
              <Component {...pageProps} />
              <ToastContainer />
          </PageFrame>
      </GlobalStore>
  )

}

export default MyApp
