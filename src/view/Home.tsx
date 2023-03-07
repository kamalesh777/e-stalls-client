import React from 'react'
import BannerSlider from '@/components/Home/BannerSlider'
import CategoryList from '@/components/Home/CategoryList'
import FeatureComp from '@/components/Home/FetureComp'
import ProductList from '@/components/Home/ProductList'

const HomePage = (): JSX.Element => (
  <>
    <BannerSlider />
    <FeatureComp />
    <CategoryList />
    <ProductList />
  </>
)

export default HomePage
