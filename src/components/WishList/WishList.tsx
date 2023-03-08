import React from 'react'

const WishList = (): JSX.Element => (
  <section className="extra-padding bg-dark-3">
    <div className="container">
      <div className="product-grid">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
          <div className="col">
            <div className="card rounded-0 product-card">
              <a href="product-details.html">
                <img src="/assets/images/products/01.png" className="card-img-top" alt="..." />
              </a>
              <div className="card-body">
                <div className="product-info text-center">
                  <p className="product-catergory font-13 mb-1">Catergory Name</p>
                  <h6 className="product-name mb-2">Product Short Name</h6>
                  <div className="mb-1 product-price">
                    <span className="text-white fs-5">$49.00</span>
                    <span className="ms-2 text-decoration-line-through text-disable-color">$99.00</span>
                  </div>
                  <div className="product-action">
                    <div className="d-grid gap-2">
                      <a href="#" className="btn btn-white btn-ecomm">
                        <i className="bx bxs-cart-add" />
                        Add to Cart
                      </a>
                      <a href="#" className="btn btn-light btn-ecomm">
                        <i className="bx bx-zoom-in" />
                        Remove From List
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
