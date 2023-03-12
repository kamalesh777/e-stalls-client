import React from 'react'
import { Modal, Form, Button, Col, Row } from 'react-bootstrap'
// eslint-disable-next-line no-restricted-imports
import ModalWrapper from '../ModalWrapper'

interface propTypes {
  openModal: boolean
  setOpenModal: (params: boolean) => void
}

const AddressModal = ({ openModal, setOpenModal }: propTypes): JSX.Element => {
  // modal close handler
  const handleClose = (): void => {
    setOpenModal(false)
  }
  return (
    <ModalWrapper {...{ openModal, setOpenModal }}>
      <Modal.Body className="p-4">
        <Form>
          <Form.Group className="mb-3" controlId="pincode">
            <Form.Label>Pincode</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Row>
            <Form.Group as={Col} md="6" className="mb-3" controlId="username">
              {/* <Form.Label>Username</Form.Label> */}
              <Form.Control type="text" placeholder="Username" className="text-dark" />
            </Form.Group>
            <Form.Group as={Col} md="6" className="mb-3" controlId="mobile">
              {/* <Form.Label>Mobile</Form.Label> */}
              <Form.Control type="text" placeholder="Mobile" className="text-dark" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" as={Col} md="6" controlId="state">
              {/* <Form.Label>State</Form.Label> */}
              <Form.Control type="text" placeholder="State" className="text-dark" />
            </Form.Group>
            <Form.Group className="mb-3" as={Col} md="6" controlId="city">
              {/* <Form.Label>City</Form.Label> */}
              <Form.Control type="text" placeholder="City" className="text-dark" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            {/* <Form.Label>Address</Form.Label> */}
            <Form.Control as="textarea" rows={3} placeholder="Address..." className="text-dark" />
          </Form.Group>
          <Row>
            <Form.Group className="mb-3" as={Col} md="6" controlId="landmark">
              {/* <Form.Label>Landmark (Optional)</Form.Label> */}
              <Form.Control type="text" placeholder="Landmark (Optional)" className="text-dark" />
            </Form.Group>
            <Form.Group className="mb-3" as={Col} md="6" controlId="alternate_mobile">
              {/* <Form.Label>Mobile (Alternate) </Form.Label> */}
              <Form.Control type="text" placeholder="Mobile (Alternate)" className="text-dark" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="addressType">
            <Form.Label>Address Type </Form.Label>
            <div className="mb-3">
              <Form.Check inline label="Home" name="home" type="radio" id="home" />
              <Form.Check inline label="Office" name="office" type="radio" id="office" />
              <Form.Check inline label="Other" name="other" type="radio" id="other" />
            </div>
          </Form.Group>
          <div>
            <Button className="btn btn-light btn-ecom me-2" onClick={handleClose}>
              Submit
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </ModalWrapper>
  )
}
export default AddressModal
