import type { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax'
import globalStyles from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    {globalStyles}
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  </>
}
