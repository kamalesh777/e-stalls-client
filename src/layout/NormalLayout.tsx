import { useRouter } from 'next/router'
import React from 'react'
import Footer from '@/common/Footer'
import HeaderComponent from '@/common/Header'

const NormalLayout = ({ children }): JSX.Element => {
  const router = useRouter()
  const classWrapper = `${router.pathname.split('/')[1]}-page`
  return (
    <>
      <HeaderComponent />
      <div className={classWrapper}>{children}</div>
      <Footer />
    </>
  )
}
export default NormalLayout
