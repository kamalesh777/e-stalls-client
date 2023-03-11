import Image from 'next/image'
import React, { useState } from 'react'
import { Modal, Badge, Form, Button, Row, Col } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import Uploader from './Uploader'

interface propTypes {
  openModal: boolean
  setOpenModal: (params: boolean) => void
}
interface fileListType {
  id: string
  thumbnailUrl: string
  size: number
  type: string
  name: string
}

const ReviewRating = ({ openModal, setOpenModal }: propTypes): JSX.Element => {
  const [tooltip, setTooltip] = useState<boolean>(false)
  const [rating, setRating] = useState<number>(0)
  const [uploadFiles, setUploadFiles] = useState<fileListType[]>([])
  const handleClose = (): void => {
    setOpenModal(false)
  }

  const handleRating = (rate: number): void => {
    setRating(rate)
  }

  const filesHandler = (fileList: fileListType[]): void => {
    setUploadFiles(fileList)
  }

  console.log('uploadFiles', uploadFiles)

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
              {uploadFiles?.map(file => (
                <Col md={3} key={file.id} className="mb-3">
                  <div className="file-list">
                    <img src={file.thumbnailUrl} className="img-fluid" alt={file.name} />
                  </div>
                </Col>
              ))}
              <Col md={3} className="mb-3">
                <Uploader message="Upload" multiple getUplodedFiles={filesHandler} grid={3}/>
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
