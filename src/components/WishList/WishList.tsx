import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { BiCartAdd, BiTrash } from 'react-icons/bi'
import ExtraCardHeader from '@/common/ExtraCardHeader'

interface propTypes {
  classes?: string
  showHeader?: boolean
  column: number
}

const WishList = ({ classes, showHeader, column }: propTypes): JSX.Element => (
  <section className={`wishlist ${classes}`}>
    {showHeader && (
      <div className="container">
        <Row>
          <Col>
            <ExtraCardHeader title="Wishlist" classes="fs-3" />
          </Col>
        </Row>
      </div>
    )}
    <div className="container">
      <div className="product-grid">
        <Row>
          <Col md={column}>
            <div className="card rounded-1 product-card">
              <div className="product-image">
                <img src="/assets/images/products/01.png" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <div className="product-info text-center">
                  <p className="product-catergory font-13 mb-1">Catergory Name</p>
                  <h6 className="product-name mb-2">Product Short Name</h6>
                  <div className="mb-1 product-price">
                    <span className="fs-5">$49.00</span>
                    <span className="ms-2 text-decoration-line-through">$99.00</span>
                  </div>
                  <div className="product-action">
                    <div className="d-grid gap-2">
                      <a href="#" className="btn btn-white btn-ecomm">
                        <BiCartAdd className="cart-add" />
                        Add to Cart
                      </a>
                      <a href="#" className="btn btn-light btn-ecomm">
                        <BiTrash className="zoom-in" />
                        Remove Item
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </section>
)

export default WishList
