import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

const Footer = (): JSX.Element => (
  <footer>
    <section className="py-4">
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
          <div className="col">
            <div className="footer-section1 mb-3">
              <h6 className="mb-3 text-uppercase">Contact Info</h6>
              <div className="address mb-3">
                <p className="mb-0 text-uppercase text-white">Address</p>
                <p className="mb-0 font-12">123 Street Name, City, Australia</p>
              </div>
              <div className="phone mb-3">
                <p className="mb-0 text-uppercase text-white">Phone</p>
                <p className="mb-0 font-13">Toll Free (123) 472-796</p>
                <p className="mb-0 font-13">Mobile : +91-9910XXXX</p>
              </div>
              <div className="email mb-3">
                <p className="mb-0 text-uppercase text-white">Email</p>
                <p className="mb-0 font-13">mail@example.com</p>
              </div>
              <div className="working-days mb-3">
                <p className="mb-0 text-uppercase text-white">WORKING DAYS</p>
                <p className="mb-0 font-13">Mon - FRI / 9:30 AM - 6:30 PM</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="footer-section2 mb-3">
              <h6 className="mb-3 text-uppercase">Shop Categories</h6>
              <PerfectScrollbar>
                <ul className="list-unstyled cat-list">
                  <li className="mb-1">
                    <a href="#">
                      <i className="bx bx-chevron-right" />
                      Jeans
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <i className="bx bx-chevron-right" />
                      T-Shirts
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <i className="bx bx-chevron-right" />
                      Sports
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <i className="bx bx-chevron-right" />
                      Shirts & Tops
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <i className="bx bx-chevron-right" />
                      Clogs & Mules
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <i className="bx bx-chevron-right" />
                      Sunglasses
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <i className="bx bx-chevron-right" />
                      Bags & Wallets
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <i className="bx bx-chevron-right" />
                      Sneakers & Athletic
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <i className="bx bx-chevron-right" />
                      Electronis
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <i className="bx bx-chevron-right" />
                      Furniture
                    </a>
                  </li>
                </ul>
              </PerfectScrollbar>
            </div>
          </div>
          <div className="col">
            <div className="footer-section3 mb-3">
              <h6 className="mb-3 text-uppercase">Popular Tags</h6>
              <div className="tags-box">
                <a href="#" className="tag-link">
                  Cloths
                </a>
                <a href="#" className="tag-link">
                  Electronis
                </a>
                <a href="#" className="tag-link">
                  Furniture
                </a>
                <a href="#" className="tag-link">
                  Sports
                </a>
                <a href="#" className="tag-link">
                  Men Wear
                </a>
                <a href="#" className="tag-link">
                  Women Wear
                </a>
                <a href="#" className="tag-link">
                  Laptops
                </a>
                <a href="#" className="tag-link">
                  Formal Shirts
                </a>
                <a href="#" className="tag-link">
                  Topwear
                </a>
                <a href="#" className="tag-link">
                  Headphones
                </a>
                <a href="#" className="tag-link">
                  Bottom Wear
                </a>
                <a href="#" className="tag-link">
                  Bags
                </a>
                <a href="#" className="tag-link">
                  Sofa
                </a>
                <a href="#" className="tag-link">
                  Shoes
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="footer-section4 mb-3">
              <h6 className="mb-3 text-uppercase">Stay informed</h6>
              <div className="subscribe">
                <input type="text" className="form-control radius-30" placeholder="Enter Your Email" />
                <div className="mt-2 d-grid">
                  <a href="#" className="btn btn-white btn-ecomm radius-30">
                    Subscribe
                  </a>
                </div>
                <p className="mt-2 mb-0 font-13">
                  Subscribe to our newsletter to receive early discount offers, updates and new products info.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row row-cols-1 row-cols-md-2 align-items-center">
          <div className="col">
            <p className="mb-0">Copyright © 2021. All right reserved.</p>
          </div>
          <div className="col text-end">
            <div className="payment-icon">
              <div className="row row-cols-auto g-2 justify-content-end">
                <div className="col">
                  <img src="assets/images/icons/visa.png" alt="" />
                </div>
                <div className="col">
                  <img src="assets/images/icons/paypal.png" alt="" />
                </div>
                <div className="col">
                  <img src="assets/images/icons/mastercard.png" alt="" />
                </div>
                <div className="col">
                  <img src="assets/images/icons/american-express.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
)

export default Footer
