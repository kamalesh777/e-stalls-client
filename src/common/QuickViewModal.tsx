import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { BiCartAdd, BiHeart, BiX } from 'react-icons/bi'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/thumbs'

interface propTypes {
  openModal: boolean
  setOpenModal: (params: boolean) => void
}

const QuickViewModal = ({ openModal, setOpenModal }: propTypes): JSX.Element => {
  const handleClose = (): void => setOpenModal(false)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <Modal show={openModal} onHide={handleClose} size="xl" centered>
      <div className="bg-dark-4 quick-view-content">
        <BiX onClick={handleClose} className="float-end fs-2 cursor-pointer" />
        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <Swiper
              loop={true}
              modules={[FreeMode, Thumbs, Navigation]}
              className="gallery-img"
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            >
              <SwiperSlide>
                <img src="assets/images/product-gallery/01.png" className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="assets/images/product-gallery/02.png" className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="assets/images/product-gallery/03.png" className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="assets/images/product-gallery/04.png" className="img-fluid" alt="" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              watchSlidesProgress={true}
              // navigation={true}
              modules={[FreeMode, Thumbs, Navigation]}
              className="thumb-img"
              freeMode={true}
              onSwiper={setThumbsSwiper}
            >
              <SwiperSlide>
                <img src="assets/images/product-gallery/01.png" className="" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="assets/images/product-gallery/02.png" className="" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="assets/images/product-gallery/03.png" className="" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="assets/images/product-gallery/04.png" className="" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-12 col-lg-6">
            <div className="product-info-section">
              <h3 className="mt-3 mt-lg-0 mb-0">Allen Solly Mens Polo T-Shirt</h3>
              <div className="product-rating d-flex align-items-center mt-2">
                <div className="rates cursor-pointer font-13">
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
                <h4 className="mb-0">$49.00</h4>
                <h5 className="mb-0 text-decoration-line-through text-light-4">$98.00</h5>
              </div>
              <div className="mt-3">
                <h6>Discription :</h6>
                <p className="mb-0">
                  Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away from the conventions
                  of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.
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
                <a href="#" className="btn btn-white btn-ecomm">
                  <BiCartAdd className="cart-add" />
                  Add to Cart
                </a>
                <a href="#" className="btn btn-light btn-ecomm">
                  <BiHeart className="cart-add" />
                  Add to Wishlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default QuickViewModal
