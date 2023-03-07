import React from 'react'
import { Modal } from 'react-bootstrap'

const QuickViewModal = ({ openModal, setOpenModal }): JSX.Element => {
  const handleClose = (): void => setOpenModal(false)

  return (
    <Modal show={openModal} onHide={handleClose}>
      <div className="modal fade" id="QuickViewProduct">
        <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-xl-down">
          <div className="modal-content bg-dark-4 rounded-0 border-0">
            <div className="modal-body">
              <button type="button" className="btn-close float-end" data-bs-dismiss="modal" />
              <div className="row g-0">
                <div className="col-12 col-lg-6">
                  <div className="image-zoom-section">
                    <div className="product-gallery owl-carousel owl-theme border mb-3 p-3" data-slider-id="1">
                      <div className="item">
                        <img src="assets/images/product-gallery/01.png" className="img-fluid" alt="" />
                      </div>
                      <div className="item">
                        <img src="assets/images/product-gallery/02.png" className="img-fluid" alt="" />
                      </div>
                      <div className="item">
                        <img src="assets/images/product-gallery/03.png" className="img-fluid" alt="" />
                      </div>
                      <div className="item">
                        <img src="assets/images/product-gallery/04.png" className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="owl-thumbs d-flex justify-content-center" data-slider-id="1">
                      <button className="owl-thumb-item">
                        <img src="assets/images/product-gallery/01.png" className="" alt="" />
                      </button>
                      <button className="owl-thumb-item">
                        <img src="assets/images/product-gallery/02.png" className="" alt="" />
                      </button>
                      <button className="owl-thumb-item">
                        <img src="assets/images/product-gallery/03.png" className="" alt="" />
                      </button>
                      <button className="owl-thumb-item">
                        <img src="assets/images/product-gallery/04.png" className="" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="product-info-section p-3">
                    <h3 className="mt-3 mt-lg-0 mb-0">Allen Solly Men's Polo T-Shirt</h3>
                    <div className="product-rating d-flex align-items-center mt-2">
                      <div className="rates cursor-pointer font-13">
                        {' '}
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-warning" />
                        <i className="bx bxs-star text-light-4" />
                      </div>
                      <div className="ms-1">
                        <p className="mb-0">(24 Ratings)</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mt-3 gap-2">
                      <h5 className="mb-0 text-decoration-line-through text-light-3">$98.00</h5>
                      <h4 className="mb-0">$49.00</h4>
                    </div>
                    <div className="mt-3">
                      <h6>Discription :</h6>
                      <p className="mb-0">
                        Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away from the
                        conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.
                      </p>
                    </div>
                    <dl className="row mt-3">
                      <dt className="col-sm-3">Product id</dt>
                      <dd className="col-sm-9">#BHU5879</dd>
                      <dt className="col-sm-3">Delivery</dt>
                      <dd className="col-sm-9">Russia, USA, and Europe</dd>
                    </dl>
                    <div className="row row-cols-auto align-items-center mt-3">
                      <div className="col">
                        <label className="form-label">Quantity</label>
                        <select className="form-select form-select-sm">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div className="col">
                        <label className="form-label">Size</label>
                        <select className="form-select form-select-sm">
                          <option>S</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XS</option>
                          <option>XL</option>
                        </select>
                      </div>
                      <div className="col">
                        <label className="form-label">Colors</label>
                        <div className="color-indigators d-flex align-items-center gap-2">
                          <div className="color-indigator-item bg-primary" />
                          <div className="color-indigator-item bg-danger" />
                          <div className="color-indigator-item bg-success" />
                          <div className="color-indigator-item bg-warning" />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-2 mt-3">
                      <a href="javascript:;" className="btn btn-white btn-ecomm">
                        {' '}
                        <i className="bx bxs-cart-add" />
                        Add to Cart
                      </a>{' '}
                      <a href="javascript:;" className="btn btn-light btn-ecomm">
                        <i className="bx bx-heart" />
                        Add to Wishlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default QuickViewModal
