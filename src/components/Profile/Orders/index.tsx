import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'

const Orders = (): JSX.Element => (
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
      <div className="card-body">My Orders</div>
    </div>
  </>
)

export default Orders
