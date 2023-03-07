import React from 'react'
import Footer from '@/common/Footer'
import HeaderComponent from '@/common/Header'

const NormalLayout = ({ children }): JSX.Element => (
  <>
    <HeaderComponent />
    <div className="content">{children}</div>
    <Footer />
  </>
)
export default NormalLayout
