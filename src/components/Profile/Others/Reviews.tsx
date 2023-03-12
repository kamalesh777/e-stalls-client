import React, { useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { BiPlus } from 'react-icons/bi'
import { HiOutlineOfficeBuilding, HiOutlineHome } from 'react-icons/hi'
import ExtraCardHeader from '@/common/ExtraCardHeader'
import ReviewRating from '@/common/Modal/ReviewRating'

import reviewData from "@/mock/reviews.json"

interface reviewTypes {
  _id: string
  product_image: string
  product_title: string
  rating: number
  rating_label: string
  like: number
  dislike: number
  review_description: string
}

const Reviews = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [reviewList, setReviewList] = useState<reviewTypes[]>([])
  return (
    <div className="content-wrapper">
      <ExtraCardHeader
        title="Manage Address"
        rightComponent={
          <button className="btn btn-light" onClick={() => setOpenModal(true)}>
            <BiPlus />
            Add Address
          </button>
        }
      />
      <Row>
        {reviewList.map(obj => (
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
      <ReviewRating {...{ openModal, setOpenModal }} />
    </div>
  )
}

export default Reviews
