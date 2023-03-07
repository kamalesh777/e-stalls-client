import { Layout } from 'antd'

import Script from 'next/script'
import React from 'react'
import HeaderComponent from '@/common/Header'

const { Content } = Layout
const NormalLayout = ({ children }): JSX.Element => (
  <Layout>
    <HeaderComponent />
    <Content className="p-4">{children}</Content>
    <Script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" />
  </Layout>
)
export default NormalLayout
