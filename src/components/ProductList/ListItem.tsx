import React, { useState } from 'react'
import { BiCartAdd, BiGrid, BiHeart, BiListUl, BiZoomIn } from 'react-icons/bi'
import QuickViewModal from '@/common/QuickViewModal'

const ListItem = (): JSX.Element => {
  const [openViwModal, setOpenViewModal] = useState<boolean>(false)

  const openModalHandler = (): void => setOpenViewModal(true)
  return (
    <>
      <div className="product-wrapper">
        <div className="toolbox d-flex align-items-center mb-3 gap-2">
          <div className="d-flex flex-wrap flex-grow-1 gap-1">
            <div className="d-flex align-items-center flex-nowrap">
              <p className="mb-0 font-13 text-nowrap">Sort By:</p>
              <select className="form-select ms-3 rounded-1">
                <option value="menu_order">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by newness</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </div>
          </div>
          <div className="d-flex flex-wrap">
            <div className="d-flex align-items-center flex-nowrap">
              <p className="mb-0 font-13 text-nowrap">Show:</p>
              <select className="form-select ms-3 rounded-1">
                <option>9</option>
                <option>12</option>
                <option>16</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
              </select>
            </div>
          </div>
          <div className="btn btn-ecomm btn-light rounded-1">
            <BiGrid className="fs-6" />
          </div>
          <div className="btn btn-ecomm btn-white rounded-1">
            <BiListUl className="fs-6" />
          </div>
        </div>
        <div className="product-grid">
          <div className="card rounded-1 product-list-card">
            <div className="d-flex align-items-center justify-content-end gap-3 position-absolute end-0 top-0 m-3">
              <div className="product-wishlist">
                <BiHeart className="text-dark" />
              </div>
            </div>
            <div className="row g-0">
              <div className="col-md-4">
                <img src="/assets/images/products/01.png" className="img-fluid" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="product-info">
                    <a href="#">
                      <p className="product-catergory font-13 mb-1">Catergory Name</p>
                    </a>
                    <a href="#">
                      <h6 className="product-name mb-2">Product Short Name</h6>
                    </a>
                    <p className="card-text">
                      This is a wider card with supporting text below as a natural lead-in to additional content. This content is
                      a little bit longer.
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="mb-1 product-price">
                        <span className="me-1 text-decoration-line-through">$99.00</span>
                        <span className="text-white fs-5">$49.00</span>
                      </div>
                      <div className="cursor-pointer ms-auto">
                        <i className="bx bxs-star text-white" />
                        <i className="bx bxs-star text-white" />
                        <i className="bx bxs-star text-white" />
                        <i className="bx bxs-star text-white" />
                        <i className="bx bxs-star text-white" />
                      </div>
                    </div>
                    <div className="product-action mt-2">
                      <div className="d-flex gap-2">
                        <a href="#" className="btn btn-ecomm  btn-white">
                          <BiCartAdd className="cart-add" />
                          Add to Cart
                        </a>
                        <div className="btn btn-ecomm btn-light" onClick={openModalHandler}>
                          <BiZoomIn className="zoom-in" />
                          Quick View
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuickViewModal openModal={openViwModal} setOpenModal={setOpenViewModal} />
    </>
  )
}

export default ListItem
