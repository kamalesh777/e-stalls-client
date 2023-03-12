import React from 'react'
import WishList from '@/components/WishList/WishList'
import NormalLayout from '@/layout/NormalLayout'

const index = (): JSX.Element => (
  <NormalLayout>
    <WishList classes="extra-padding" column={3} />
  </NormalLayout>
)

export default index
