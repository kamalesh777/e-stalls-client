import React from 'react'
import WishList from '@/components/WishList/WishList'
import NormalLayout from '@/layout/NormalLayout'

const index = (): JSX.Element => (
  <NormalLayout>
    <WishList classes="extra-padding" column={3} showHeader={true} />
  </NormalLayout>
)

export default index
