import React, { useState } from 'react'
import { Col, Badge, Dropdown, Row } from 'react-bootstrap'
import { BiDotsVerticalRounded, BiEdit, BiPlus, BiStar, BiTrash } from 'react-icons/bi'
import ExtraCardHeader from '@/common/ExtraCardHeader'
import ReviewRating from '@/common/Modal/ReviewRating'

import reviewData from '@/mock/reviews.json'

interface reviewTypes {
  _id: string
  product_image: string
  product_name: string
  rating: number
  rating_label: string
  like: number
  dislike: number
  review_description: string
}

const Reviews = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [reviewList, setReviewList] = useState<reviewTypes[]>(reviewData || [])

  const editHandler = (id: string): void => {
    console.log(id)
  }

  // dropdown option
  const individualDropdown = (obj: reviewTypes): JSX.Element => (
    <Dropdown className="text-center">
      <Dropdown.Toggle id="dropdown-basic" className="simple-dropdown">
        <BiDotsVerticalRounded />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={() => editHandler(obj._id)}>
          <BiEdit className="me-2 fs-5" />
          Edit
        </Dropdown.Item>
        <Dropdown.Item className="text-danger">
          <BiTrash className="me-2 fs-5" />
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
  return (
    <div className="content-wrapper">
      <ExtraCardHeader title="Reviews (3)" />
      <div className="profile-review">
        <div className="review-list-card">
          <div className="review-haeder">
            <Row>
              <Col sm={5} md={4}>
                Product Name
              </Col>
              <Col sm={6} md={7}>
                Review
              </Col>
              <Col sm={1} md={1}>
                Action
              </Col>
            </Row>
          </div>
          {reviewList.map(obj => (
            <div className="review-rows" key={obj._id}>
              <Row>
                <Col sm={5} md={4}>
                  <div className="d-flex align-items-center">
                    <div className="review-product mb-0">
                      <img src={obj.product_image} className="img-fluid" />
                    </div>
                    <div className="p-name">
                      <h2 className="fs-7 mb-0">{obj.product_name}</h2>
                      <Badge bg="success" className="fs-7">
                        {obj.rating}
                        <BiStar className="ms-1" />
                      </Badge>
                    </div>
                  </div>
                </Col>
                <Col sm={6} md={7}>
                  {obj.review_description}
                </Col>

                <Col sm={1} md={1}>
                  {individualDropdown(obj)}
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </div>
      <ReviewRating {...{ openModal, setOpenModal }} />
    </div>
  )
}

export default Reviews
