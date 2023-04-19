import { useEffect } from 'react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'

import * as ga from '../lib/ga'
import { Tracker } from '../components/Tracker'

import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }

    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WRG3YV4PBP"
      ></Script>
      <Script id={'Analytics'}>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-WRG3YV4PBP');
        `}
      </Script>

      <Tracker />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
