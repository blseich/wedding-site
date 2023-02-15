import type { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import globalStyles from '../styles/global'
import Navigation from '../components/navigation';

config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return <>
    {globalStyles}
    <ParallaxProvider>
      <Navigation />
      <Component {...pageProps} />
    </ParallaxProvider>
  </>
}
