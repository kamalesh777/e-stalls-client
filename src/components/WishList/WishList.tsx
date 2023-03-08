import React from 'react'
import { BiCartAdd, BiZoomIn } from 'react-icons/bi'

const WishList = (): JSX.Element => (
  <section className="extra-padding wishlist">
    <div className="container">
      <div className="product-grid">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5 g-3">
          <div className="col">
            <div className="card rounded-0 product-card">
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
                        <BiZoomIn className="zoom-in" />
                        Remove Item
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default WishList
