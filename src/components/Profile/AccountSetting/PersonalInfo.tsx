import React from 'react'
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap'
import { BiPlus } from 'react-icons/bi'
import ExtraCardHeader from '@/common/ExtraCardHeader'

const PersonalInfo = (): JSX.Element => {
  console.log('hello')
  return (
    <>
      <ExtraCardHeader title="My Information" />
      <div className="card">
        <div className="card-body">
          <Form className="p-4">
            <Row className="mb-3">
              <Form.Group as={Col} md="5" controlId="first_name">
                <Form.Label>First name</Form.Label>
                <Form.Control required type="text" placeholder="First name" defaultValue="Mark" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="5" controlId="last_name">
                <Form.Label>Last name</Form.Label>
                <Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="5" controlId="email">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control type="text" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                  <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="5" controlId="mobile">
                <Form.Label>Mobile</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control type="number" placeholder="Username" aria-describedby="inputGroupPrepend" required />
                  <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="5" controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Button type="submit" className="btn btn-light btn-ecom">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default PersonalInfo
