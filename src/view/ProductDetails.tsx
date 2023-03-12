import React from 'react'
import { Container } from 'react-bootstrap'
import ProducDetails from '@/components/ProductDetails/index'

const ProductDetails = (): JSX.Element => (
  <section className="extra-padding bg-light product-details-view">
    <Container>
      <ProducDetails />
    </Container>
  </section>
)

export default ProductDetails
