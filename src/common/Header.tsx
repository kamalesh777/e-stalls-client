import React from 'react'

const HeaderComponent = (): JSX.Element => (
  <div className="header-wrapper bg-dark-1">
    <div className="top-menu border-bottom">
      <div className="container">
        <nav className="navbar navbar-expand">
          <div className="shiping-title text-uppercase font-13 text-white d-none d-sm-flex">
            {' '}
            <i className="bx bx-headphone" /> Customer Support: 0958885555
          </div>
          <ul className="navbar-nav ms-auto d-none d-lg-flex">
            <li className="nav-item">
              {' '}
              <a className="nav-link" href="order-tracking.html">
                Track Order
              </a>
            </li>
            <li className="nav-item">
              {' '}
              <a className="nav-link" href="about-us.html">
                About
              </a>
            </li>
            <li className="nav-item">
              {' '}
              <a className="nav-link" href="shop-categories.html">
                Our Stores
              </a>
            </li>
            <li className="nav-item">
              {' '}
              <a className="nav-link" href="contact-us.html">
                Contact
              </a>
            </li>
            <li className="nav-item">
              {' '}
              <a className="nav-link" href="javascript:;">
                Help & FAQs
              </a>
            </li>
          </ul>

          <ul className="navbar-nav social-link ms-lg-2 ms-auto">
            <li className="nav-item">
              {' '}
              <a className="nav-link" href="javascript:;">
                <i className="bx bxl-facebook" />
              </a>
            </li>
            <li className="nav-item">
              {' '}
              <a className="nav-link" href="javascript:;">
                <i className="bx bxl-twitter" />
              </a>
            </li>
            <li className="nav-item">
              {' '}
              <a className="nav-link" href="javascript:;">
                <i className="bx bxl-linkedin" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div className="header-content pb-3 pb-md-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-md-auto">
            <div className="d-flex align-items-center">
              <div className="mobile-toggle-menu d-lg-none px-lg-2" data-trigger="#navbar_main">
                <i className="bx bx-menu" />
              </div>
              <div className="logo d-none d-lg-flex">
                <a href="index.html">
                  <img src="assets/images/estalls-logo.webp" className="estalls-logo" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md order-4 order-md-2">
            <div className="input-group flex-nowrap px-xl-4">
              <input type="text" className="form-control w-100" placeholder="Search for Products" />
              <span className="input-group-text cursor-pointer">
                <i className="bx bx-search" />
              </span>
            </div>
          </div>
          <div className="col col-md-auto offset-md-3 order-2 order-md-4">
            <div className="top-cart-icons">
              <nav className="navbar navbar-expand">
                <ul className="navbar-nav ms-auto">
                  <button className="btn btn-primary align-self-center">Login</button>
                  <li className="nav-item align-self-center">
                    <a href="account-dashboard.html" className="nav-link">
                      Become a Seller
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a href="account-dashboard.html" className="nav-link  cart-link">
                      <i className="bx bx-user" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="wishlist.html" className="nav-link cart-link">
                      <i className="bx bx-heart" />
                    </a>
                  </li>
                  <li className="nav-item dropdown dropdown-large">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative cart-link"
                      data-bs-toggle="dropdown"
                    >
                      {' '}
                      <span className="alert-count">8</span>
                      <i className="bx bx-shopping-bag" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="javascript:;">
                        <div className="cart-header">
                          <p className="cart-header-title mb-0">8 ITEMS</p>
                          <p className="cart-header-clear ms-auto mb-0">VIEW CART</p>
                        </div>
                      </a>
                      <div className="cart-list">
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h6 className="cart-product-title">Men White T-Shirt</h6>
                              <p className="cart-product-price">1 X $29.00</p>
                            </div>
                            <div className="position-relative">
                              <div className="cart-product-cancel position-absolute">
                                <i className="bx bx-x" />
                              </div>
                              <div className="cart-product">
                                <img src="assets/images/products/01.png" className="" alt="product image" />
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h6 className="cart-product-title">Puma Sports Shoes</h6>
                              <p className="cart-product-price">1 X $29.00</p>
                            </div>
                            <div className="position-relative">
                              <div className="cart-product-cancel position-absolute">
                                <i className="bx bx-x" />
                              </div>
                              <div className="cart-product">
                                <img src="assets/images/products/05.png" className="" alt="product image" />
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h6 className="cart-product-title">Women Red Sneakers</h6>
                              <p className="cart-product-price">1 X $29.00</p>
                            </div>
                            <div className="position-relative">
                              <div className="cart-product-cancel position-absolute">
                                <i className="bx bx-x" />
                              </div>
                              <div className="cart-product">
                                <img src="assets/images/products/17.png" className="" alt="product image" />
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h6 className="cart-product-title">Black Headphone</h6>
                              <p className="cart-product-price">1 X $29.00</p>
                            </div>
                            <div className="position-relative">
                              <div className="cart-product-cancel position-absolute">
                                <i className="bx bx-x" />
                              </div>
                              <div className="cart-product">
                                <img src="assets/images/products/10.png" className="" alt="product image" />
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h6 className="cart-product-title">Blue Girl Shoes</h6>
                              <p className="cart-product-price">1 X $29.00</p>
                            </div>
                            <div className="position-relative">
                              <div className="cart-product-cancel position-absolute">
                                <i className="bx bx-x" />
                              </div>
                              <div className="cart-product">
                                <img src="assets/images/products/08.png" className="" alt="product image" />
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h6 className="cart-product-title">Men Leather Belt</h6>
                              <p className="cart-product-price">1 X $29.00</p>
                            </div>
                            <div className="position-relative">
                              <div className="cart-product-cancel position-absolute">
                                <i className="bx bx-x" />
                              </div>
                              <div className="cart-product">
                                <img src="assets/images/products/18.png" className="" alt="product image" />
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h6 className="cart-product-title">Men Yellow T-Shirt</h6>
                              <p className="cart-product-price">1 X $29.00</p>
                            </div>
                            <div className="position-relative">
                              <div className="cart-product-cancel position-absolute">
                                <i className="bx bx-x" />
                              </div>
                              <div className="cart-product">
                                <img src="assets/images/products/04.png" className="" alt="product image" />
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1">
                              <h6 className="cart-product-title">Pool Charir</h6>
                              <p className="cart-product-price">1 X $29.00</p>
                            </div>
                            <div className="position-relative">
                              <div className="cart-product-cancel position-absolute">
                                <i className="bx bx-x" />
                              </div>
                              <div className="cart-product">
                                <img src="assets/images/products/16.png" className="" alt="product image" />
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="javascript:;">
                        <div className="text-center cart-footer d-flex align-items-center">
                          <h5 className="mb-0">TOTAL</h5>
                          <h5 className="mb-0 ms-auto">$189.00</h5>
                        </div>
                      </a>
                      <div className="d-grid p-3 border-top">
                        {' '}
                        <a href="javascript:;" className="btn btn-light btn-ecomm">
                          CHECKOUT
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HeaderComponent
