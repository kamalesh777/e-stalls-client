import Link from 'next/link'
import React from 'react'
import { BiCartAdd, BiHeart, BiMenu, BiSearch, BiShoppingBag, BiUser, BiX } from 'react-icons/bi'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import PerfectScrollbar from 'react-perfect-scrollbar'

const HeaderComponent = (): JSX.Element => (
  <div className="header-wrapper bg-dark-1">
    <div className="top-menu border-bottom">
      <div className="container">
        <nav className="navbar navbar-expand">
          <div className="shiping-title text-uppercase font-13 text-white d-none d-sm-flex">
            <i className="bx bx-headphone" /> Customer Support: 0958885555
          </div>
          <ul className="navbar-nav ms-auto d-none d-lg-flex">
            <li className="nav-item">
              <a className="nav-link" href="order-tracking.html">
                Track Order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about-us.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="shop-categories.html">
                Our Stores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact-us.html">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Help & FAQs
              </a>
            </li>
          </ul>

          <ul className="navbar-nav social-link ms-lg-2 ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaFacebookF />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaTwitter />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaLinkedinIn />
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
                <BiMenu />
              </div>
              <div className="logo d-none d-lg-flex">
                <Link href="/">
                  <img src="/assets/images/estalls-logo.webp" className="estalls-logo" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md order-4 order-md-2">
            <div className="flex-nowrap mx-xl-3 input-search">
              <input type="text" className="form-control text-white w-100" placeholder="Search for Products" />
              <BiSearch className="searchBtn" />
            </div>
          </div>
          <div className="col col-md-auto offset-md-3 order-2 order-md-4">
            <div className="top-cart-icons">
              <nav className="navbar navbar-expand">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item align-self-center">
                    <button className="btn btn-light btn-ecomm btn-lg">Login Now</button>
                  </li>
                  <li className="nav-item align-self-center">
                    <a href="account-dashboard.html" className="nav-link">
                      Become a Seller
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a href="account-dashboard.html" className="nav-link  cart-link">
                      <BiUser />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="wishlist.html" className="nav-link cart-link">
                      <BiHeart />
                    </a>
                  </li>
                  <li className="nav-item dropdown dropdown-large">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative cart-link"
                      data-bs-toggle="dropdown"
                    >
                      <span className="alert-count">8</span>
                      <BiShoppingBag />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="">
                        <div className="cart-header">
                          <p className="cart-header-title mb-0">8 ITEMS</p>
                          <p className="cart-header-clear ms-auto mb-0">VIEW CART</p>
                        </div>
                      </a>
                      <PerfectScrollbar>
                        <div className="cart-list">
                          <a className="dropdown-item" href="#">
                            <div className="d-flex align-items-center">
                              <div className="flex-grow-1">
                                <h6 className="cart-product-title">Men White T-Shirt</h6>
                                <p className="cart-product-price">1 X $29.00</p>
                              </div>
                              <div className="position-relative">
                                <div className="cart-product-cancel position-absolute">
                                  <BiX />
                                </div>
                                <div className="cart-product">
                                  <img src="/assets/images/products/01.png" className="" alt="product image" />
                                </div>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="#">
                            <div className="d-flex align-items-center">
                              <div className="flex-grow-1">
                                <h6 className="cart-product-title">Puma Sports Shoes</h6>
                                <p className="cart-product-price">1 X $29.00</p>
                              </div>
                              <div className="position-relative">
                                <div className="cart-product-cancel position-absolute">
                                  <BiX />
                                </div>
                                <div className="cart-product">
                                  <img src="/assets/images/products/05.png" className="" alt="product image" />
                                </div>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="#">
                            <div className="d-flex align-items-center">
                              <div className="flex-grow-1">
                                <h6 className="cart-product-title">Women Red Sneakers</h6>
                                <p className="cart-product-price">1 X $29.00</p>
                              </div>
                              <div className="position-relative">
                                <div className="cart-product-cancel position-absolute">
                                  <BiX />
                                </div>
                                <div className="cart-product">
                                  <img src="/assets/images/products/17.png" className="" alt="product image" />
                                </div>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="#">
                            <div className="d-flex align-items-center">
                              <div className="flex-grow-1">
                                <h6 className="cart-product-title">Black Headphone</h6>
                                <p className="cart-product-price">1 X $29.00</p>
                              </div>
                              <div className="position-relative">
                                <div className="cart-product-cancel position-absolute">
                                  <BiX />
                                </div>
                                <div className="cart-product">
                                  <img src="/assets/images/products/10.png" className="" alt="product image" />
                                </div>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="#">
                            <div className="d-flex align-items-center">
                              <div className="flex-grow-1">
                                <h6 className="cart-product-title">Blue Girl Shoes</h6>
                                <p className="cart-product-price">1 X $29.00</p>
                              </div>
                              <div className="position-relative">
                                <div className="cart-product-cancel position-absolute">
                                  <BiX />
                                </div>
                                <div className="cart-product">
                                  <img src="/assets/images/products/08.png" className="" alt="product image" />
                                </div>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="#">
                            <div className="d-flex align-items-center">
                              <div className="flex-grow-1">
                                <h6 className="cart-product-title">Men Leather Belt</h6>
                                <p className="cart-product-price">1 X $29.00</p>
                              </div>
                              <div className="position-relative">
                                <div className="cart-product-cancel position-absolute">
                                  <BiX />
                                </div>
                                <div className="cart-product">
                                  <img src="/assets/images/products/18.png" className="" alt="product image" />
                                </div>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="#">
                            <div className="d-flex align-items-center">
                              <div className="flex-grow-1">
                                <h6 className="cart-product-title">Men Yellow T-Shirt</h6>
                                <p className="cart-product-price">1 X $29.00</p>
                              </div>
                              <div className="position-relative">
                                <div className="cart-product-cancel position-absolute">
                                  <BiX />
                                </div>
                                <div className="cart-product">
                                  <img src="/assets/images/products/04.png" className="" alt="product image" />
                                </div>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="#">
                            <div className="d-flex align-items-center">
                              <div className="flex-grow-1">
                                <h6 className="cart-product-title">Pool Charir</h6>
                                <p className="cart-product-price">1 X $29.00</p>
                              </div>
                              <div className="position-relative">
                                <div className="cart-product-cancel position-absolute">
                                  <BiX />
                                </div>
                                <div className="cart-product">
                                  <img src="/assets/images/products/16.png" className="" alt="product image" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </PerfectScrollbar>
                      <div className="text-center cart-footer d-flex align-items-center">
                        <h5 className="mb-0">TOTAL</h5>
                        <h5 className="mb-0 ms-auto">$189.00</h5>
                      </div>
                      <div className="d-grid p-3 border-top">
                        <Link href="/shop-cart" className="btn btn-light btn-ecomm">
                          <BiCartAdd className="cart-add" />
                          GO TO CART
                        </Link>
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
