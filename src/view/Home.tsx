import React from 'react'
import BannerSlider from '@/components/Home/BannerSlider'
import CategoryList from '@/components/Home/CategoryList'
import FeatureComp from '@/components/Home/FetureComp'

const HomePage = (): JSX.Element => (
  <>
    <BannerSlider />
    <FeatureComp />
    <CategoryList />
  </>
)

export default HomePage
