import React from 'react'
import NormalLayout from '@/layout/NormalLayout'
import ProductListView from '@/view/ProductListView'

const categoryID = (): JSX.Element => (
  <NormalLayout>
    <ProductListView />
  </NormalLayout>
)

export default categoryID
