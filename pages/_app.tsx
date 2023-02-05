import type { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import globalStyles from '../styles/global'

config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return <>
    {globalStyles}
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  </>
}
