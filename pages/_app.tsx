/* eslint-disable no-restricted-imports */
import '../styles/globals.scss'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    document.querySelector('body').classList.add('bg-theme', 'bg-theme1')
  }, [])
  return <Component {...pageProps} />
}
