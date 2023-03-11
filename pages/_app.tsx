/* eslint-disable no-restricted-imports */
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/bootstrap-override.scss'
import 'react-perfect-scrollbar/dist/css/styles.css'
import '../styles/globals.scss'

import { useEffect } from 'react'
import ToastWrapper from '@/common/ToastMessage'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    document.querySelector('body').classList.add('bg-theme', 'bg-theme4')
    // import bootstrap.bundle.min.js on initial render
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])
  return (
    <>
      <Component {...pageProps} />
      <ToastWrapper />
    </>
  )
}
