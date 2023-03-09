import React, { useState } from 'react'
import { Modal, Badge, Form, Button } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'

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
      <Modal.Body>
        <div className="review-product">
          <img src="/assets/images/products/02.png" />
          <div className="review-product-details">
            <h2 className="fs-5 mb-0">Nova NHT 1039 USB Trim....</h2>
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
                size={34}
                allowFraction
                showTooltip={tooltip}
                onClick={handleRating}
                onPointerLeave={() => setTooltip(false)}
                onPointerEnter={() => setTooltip(true)}
              />
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button className="btn btn-light btn-ecom" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ReviewRating
