import Script from 'next/script'
import React from 'react'
import HeaderComponent from '@/common/Header'

const NormalLayout = ({ children }): JSX.Element => (
  <>
    <HeaderComponent />
    <div className="p-4">{children}</div>
    <Script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" />
  </>
)
export default NormalLayout
