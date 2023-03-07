import React from 'react'
import HeaderComponent from '@/common/Header'

const NormalLayout = ({ children }): JSX.Element => (
  <>
    <HeaderComponent />
    <div className="content">{children}</div>
  </>
)
export default NormalLayout
