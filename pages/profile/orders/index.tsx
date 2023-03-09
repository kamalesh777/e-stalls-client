import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import NormalLayout from '@/layout/NormalLayout'
import Profile from '@/view/Profile'

const OrdersPage = (): JSX.Element => {
  const [openModal, setOpenModal] = useState(false)
  const handleClose = () => {
    setOpenModal(false)
  }
  return (
    <NormalLayout>
      <Profile />
      <Button variant="primary" onClick={() => setOpenModal(true)}>
        Open Modal
      </Button>
      <Modal centered show={openModal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Review this product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" className="text-dark" placeholder="Enter review title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter review description..." />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </NormalLayout>
  )
}

export default OrdersPage
