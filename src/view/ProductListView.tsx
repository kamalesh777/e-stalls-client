import React from 'react'
import FilterMenu from '@/components/ProductList/FilterMenu'
import ListItem from '@/components/ProductList/ListItem'

const ProductListView = (): JSX.Element => (
  <section className="py-4 product-list-view">
    <div className="container">
      <div className="row">
        <div className="col-12 col-xl-3">
          <FilterMenu />
        </div>
        <div className="col-12 col-xl-9">
          <ListItem />
        </div>
      </div>
    </div>
  </section>
)

export default ProductListView
