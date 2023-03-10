import React from 'react'
import { Form } from 'react-bootstrap'
import { BiCloudUpload } from 'react-icons/bi'

const Uploader = ({ message }): JSX.Element => {
  const fileHandler = e => {
    console.log(e)
  }
  console.log('hi')
  return (
    <div className="file-uploader">
      <BiCloudUpload className="uploader-icon" />
      <Form.Control type="file" multiple onChange={e => fileHandler(e)} className="file-input" />
      <p className="mb-1">{message}</p>
    </div>
  )
}

export default Uploader
