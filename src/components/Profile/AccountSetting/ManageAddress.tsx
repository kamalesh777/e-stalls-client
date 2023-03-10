import React, { useState } from 'react'
import { Card, Col, Dropdown, Row } from 'react-bootstrap'
import { BiDotsVerticalRounded, BiPlus } from 'react-icons/bi'
import { HiOutlineHome, HiOutlineOfficeBuilding } from 'react-icons/hi'

import addressData from '@/mock/address.json'

interface dataType {
  _id: string
  name: string
  mobile: string
  address: string
  address_type: string
  default: boolean
}
const ManageAddress = (): JSX.Element => {
  const [addressList] = useState<dataType[]>(addressData)

  const individualDropdown = (obj: dataType): JSX.Element => (
    <Dropdown className="option-menu">
      <Dropdown.Toggle id="dropdown-basic" className="simple-dropdown">
        <BiDotsVerticalRounded />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
        {!obj.default && <Dropdown.Item href="#/action-3">Make it default</Dropdown.Item>}
        <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-extra-header">
          <h5>Manage Address</h5>
          <button className="btn btn-light">
            <BiPlus />
            Add Address
          </button>
        </div>
        <Row>
          {addressList.map(obj => (
            <Col key={obj._id} md={6}>
              <Card className="adress-box">
                <Card.Body>
                  <div className={`addres-icon ${obj.default ? 'active' : ''}`}>
                    {obj.address_type === 'office' ? (
                      <HiOutlineOfficeBuilding className="fs-3" />
                    ) : (
                      <HiOutlineHome className="fs-3" />
                    )}
                  </div>

                  <h4 className="fs-6">{obj.name}</h4>
                  <p className="fs-7 mb-0">{obj.address}</p>
                  {individualDropdown(obj)}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default ManageAddress
