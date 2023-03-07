import React from 'react'
import { BiHeart, BiXCircle } from 'react-icons/bi'

const ShopCartView = (): JSX.Element => (
  <section className="py-4">
    <div className="container">
      <div className="shop-cart">
        <div className="row">
          <div className="col-12 col-xl-8">
            <div className="shop-cart-list mb-3 p-3">
              <div className="row align-items-center g-3">
                <div className="col-12 col-lg-6">
                  <div className="d-lg-flex align-items-center gap-2">
                    <div className="cart-img text-center text-lg-start">
                      <img src="assets/images/products/01.png" width="130" alt="" />
                    </div>
                    <div className="cart-detail text-center text-lg-start">
                      <h6 className="mb-2">White Regular Fit Polo T-Shirt</h6>
                      <p className="mb-0">
                        Size: <span>Regular</span>
                      </p>
                      <p className="mb-2">
                        Color: <span>White & Blue</span>
                      </p>
                      <h5 className="mb-0">$19.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="cart-action text-center">
                    <input type="number" className="form-control rounded-0" value="2" min="1" />
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="text-center">
                    <div className="d-flex gap-2 justify-content-center justify-content-lg-end">
                      <a href="javascript:;" className="btn btn-light rounded-0 btn-ecomm">
                        <BiXCircle className="me-1 fs-5" /> Remove
                      </a>
                      <a href="javascript:;" className="btn btn-light rounded-0 btn-ecomm">
                        <BiHeart className="fs-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-4 border-top" />
              <div className="row align-items-center g-3">
                <div className="col-12 col-lg-6">
                  <div className="d-lg-flex align-items-center gap-2">
                    <div className="cart-img text-center text-lg-start">
                      <img src="/assets/images/products/17.png" width="130" alt="" />
                    </div>
                    <div className="cart-detail text-center text-lg-start">
                      <h6 className="mb-2">Fancy Red Sneakers</h6>
                      <p className="mb-0">
                        Size: <span>Small</span>
                      </p>
                      <p className="mb-2">
                        Color: <span>White & Red</span>
                      </p>
                      <h5 className="mb-0">$16.00</h5>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="cart-action text-center">
                    <input type="number" className="form-control rounded-0" value="2" min="1" />
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="text-center">
                    <div className="d-flex gap-2 justify-content-center justify-content-lg-end">
                      <a href="javascript:;" className="btn btn-light rounded-0 btn-ecomm">
                        <BiXCircle className="me-1 fs-5" /> Remove
                      </a>
                      <a href="javascript:;" className="btn btn-light rounded-0 btn-ecomm">
                        <BiHeart className="fs-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="checkout-form p-3 bg-dark-3">
              <div className="card rounded-0 border bg-transparent mb-0 shadow-none">
                <div className="card-body">
                  <p className="mb-2">
                    Subtotal: <span className="float-end">$198.00</span>
                  </p>
                  <p className="mb-2">
                    Shipping: <span className="float-end">--</span>
                  </p>
                  <p className="mb-2">
                    Taxes: <span className="float-end">$14.00</span>
                  </p>
                  <p className="mb-0">
                    Discount: <span className="float-end">--</span>
                  </p>
                  <div className="my-3 border-top" />
                  <h5 className="mb-0">
                    Order Total: <span className="float-end">212.00</span>
                  </h5>
                  <div className="my-4" />
                  <div className="d-grid">
                    {' '}
                    <a href="javascript:;" className="btn btn-white btn-ecomm">
                      Proceed to Checkout
                    </a>
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

export default ShopCartView
