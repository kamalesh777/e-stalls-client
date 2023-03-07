import React from 'react'
import { BiDollarCircle, BiSupport, BiTaxi } from 'react-icons/bi'

const FeatureComp = (): JSX.Element => (
  <section className="feauture-section">
    <div className="container">
      <div className="row row-cols-1 row-cols-lg-3 row-group align-items-center">
        <div className="col p-3">
          <div className="d-flex align-items-center">
            <div className="fs-1 text-white">
              <BiTaxi />
            </div>
            <div className="info-box-content ps-3">
              <h6 className="mb-0">FREE SHIPPING &amp; RETURN</h6>
              <p className="mb-0">Free shipping on all orders over $49</p>
            </div>
          </div>
        </div>
        <div className="col p-3">
          <div className="d-flex align-items-center">
            <div className="fs-1 text-white">
              <BiDollarCircle />
            </div>
            <div className="info-box-content ps-3">
              <h6 className="mb-0">MONEY BACK GUARANTEE</h6>
              <p className="mb-0">100% money back guarantee</p>
            </div>
          </div>
        </div>
        <div className="col p-3">
          <div className="d-flex align-items-center">
            <div className="fs-1 text-white">
              <BiSupport />
            </div>
            <div className="info-box-content ps-3">
              <h6 className="mb-0">ONLINE SUPPORT 24/7</h6>
              <p className="mb-0">Awesome Support for 24/7 Days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default FeatureComp
