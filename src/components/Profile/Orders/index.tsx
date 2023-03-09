import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'

import orderData from '@/mock/orders.json'

const Orders = (): JSX.Element => {
  console.log(orderData)
  return (
    <>
      <Row className="g-0 mb-3">
        <Col md={4}>
          <div className="input-search">
            <input type="text" className="form-control text-dark w-100" placeholder="Search your orders here" />
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
          {}
          <Row className="order-list-row g-0">
            <Col sm={6}>
              <div className="order-product-col">
                <img src="/assets/images/products/04.png" className="op-image" />
                <div className="">
                  <p className="fs-6 mb-0">Kamalesh Maity</p>
                  <p className="fs-7 mb-0">Size : M</p>
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <p className="fs-6">899</p>
            </Col>
            <Col sm={3}>
              <p className="fs-6 font-weight-bold">Cancelled</p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Orders
