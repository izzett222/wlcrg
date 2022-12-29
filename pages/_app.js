import '../styles/globals.css';
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

function MyApp({ Component, pageProps }) {
  return  (
    <div className={`${roboto.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
