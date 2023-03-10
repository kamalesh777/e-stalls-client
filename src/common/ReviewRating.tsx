import React, { useState } from 'react'
import { Modal, Badge, Form, Button, Row, Col } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import Uploader from './Uploader'

interface propTypes {
  openModal: boolean
  setOpenModal: (params: boolean) => void
}

const ReviewRating = ({ openModal, setOpenModal }: propTypes): JSX.Element => {
  const [tooltip, setTooltip] = useState<boolean>(false)
  const [, setRating] = useState<number>(0)
  const handleClose = (): void => {
    setOpenModal(false)
  }

  const handleRating = (rate: number): void => {
    setRating(rate)
  }

  return (
    <Modal centered show={openModal} onHide={handleClose} animation={false}>
      <Modal.Body className="py-4">
        <div className="review-product">
          <img src="/assets/images/products/02.png" />
          <div className="review-product-details">
            <h2 className="fs-6 mb-1">Nova NHT 1039 USB Trim....</h2>
            <div className="review-rating">
              <Badge bg="success" className="me-2">
                4
              </Badge>
              <span>(23,420)</span>
            </div>
          </div>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {/* <Form.Label>Title</Form.Label> */}
            <Form.Control type="text" className="text-dark" placeholder="Enter review title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            {/* <Form.Label>Description</Form.Label> */}
            <Form.Control as="textarea" rows={3} placeholder="Enter review description..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Rate the product</Form.Label>
            <div className="d-flex">
              <Rating
                size={30}
                allowFraction
                showTooltip={tooltip}
                onClick={handleRating}
                onPointerLeave={() => setTooltip(false)}
                onPointerEnter={() => setTooltip(true)}
              />
            </div>
          </Form.Group>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Upload photo</Form.Label>
            <Row>
              <Col md={3}>
                <Uploader message="Upload" />
              </Col>
            </Row>
          </Form.Group>
          <div>
            <Button className="btn btn-light btn-ecom me-2" onClick={handleClose}>
              Upload
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ReviewRating
