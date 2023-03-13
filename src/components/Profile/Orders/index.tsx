import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'

import ReviewRating from '@/common/Modal/ReviewRating'
import orderData from '@/mock/orders.json'

const Orders = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  return (
    <>
      <Row className="g-0 mb-3">
        <Col md={4}>
          <div className="input-search">
            <input type="text" className="form-control text-dark w-100 bg-white" placeholder="Search your orders here" />
            <BiSearch className="searchBtn" />
          </div>
        </Col>
        <Col className="ms-auto pe-3" md={3}>
          <div className="d-flex align-items-center flex-nowrap">
            <p className="mb-0 font-13 text-nowrap">Status:</p>
            <select className="form-select ms-2 rounded-1">
              <option value="menu_order">On the way</option>
              <option value="popularity">Delivered</option>
              <option value="rating">Cancelled</option>
              <option value="date">Returned</option>
            </select>
          </div>
        </Col>
        <Col md={3}>
          <div className="d-flex align-items-center flex-nowrap">
            <p className="mb-0 font-13 text-nowrap">Time:</p>
            <select className="form-select ms-2 rounded-1">
              <option value="menu_order">Last 30 days</option>
              <option value="popularity">2022</option>
              <option value="rating">2021</option>
              <option value="date">2020</option>
            </select>
          </div>
        </Col>
      </Row>
      <div className="card">
        <div className="card-body">
          {orderData.map(obj => (
            <Row className="order-list-row g-0" key={obj._id}>
              <Col sm={6}>
                <div className="order-product-col">
                  <img src={obj.product_image} className="op-image" />
                  <div className="">
                    <p className="fs-6 mb-0">{obj.title}</p>
                    {obj.variant?.map(item => (
                      <span key={item.value} className="fs-7 mb-0 text-light-2">
                        {item.label}: {item.value}{' '}
                      </span>
                    ))}
                  </div>
                </div>
              </Col>
              <Col sm={3}>
                <p className="fs-6">₹ {obj.price}</p>
              </Col>
              <Col sm={3}>
                <Button
                  onClick={() => setOpenModal(true)}
                  size="sm"
                  variant={obj.status_code === 2 ? 'success' : obj.status_code === 1 ? 'warning' : 'danger'}
                  className="fs-7 font-weight-bold"
                >
                  {obj.status}
                </Button>
              </Col>
            </Row>
          ))}
        </div>
      </div>
      <ReviewRating {...{ openModal, setOpenModal }} />
    </>
  )
}

export default Orders
