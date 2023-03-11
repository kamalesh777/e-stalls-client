import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { BiCloudUpload } from 'react-icons/bi'
import { distinct, getBase64, randomKeyGenerator } from '@/utils/commonFUnctions'

interface propTypes {
  message: string
  multiple?: boolean
  getUplodedFiles: (arr: fileListType[]) => void
  uploadFiles: fileListType[]
  fileList: fileListType[]
  setFileList: (arr: fileListType[]) => void
}

interface fileListType {
  id: string
  thumbnailUrl: string
  size: number
  type: string
  name: string
  url?: string
}

const Uploader = ({ message, multiple, getUplodedFiles, uploadFiles, fileList, setFileList }: propTypes): JSX.Element => {
  const fileHandler = (target): void => {
    const filesArr = [...target.files]
    // make trnsform of the image with base64
    filesArr.map(item =>
      getBase64(item, cb => {
        const fileObj = {
          id: randomKeyGenerator(3),
          name: item.name,
          size: item.size,
          type: item.type,
          thumbnailUrl: cb,
        }
        setFileList(prevState => [...prevState, fileObj])
      }),
    )
  }

  useEffect(() => {
    const freshArray = distinct(fileList, ['name'], false)
    getUplodedFiles(freshArray as unknown as fileListType[])
  }, [fileList?.length])

  console.log('UploadFiles', uploadFiles)
  console.log('fileList', fileList)

  return (
    <div className="file-uploader">
      <BiCloudUpload className="uploader-icon" />
      <Form.Control
        type="file"
        multiple={multiple ? true : false}
        onChange={event => fileHandler(event.target)}
        className="file-input"
      />
      <p className="mb-1">{message}</p>
    </div>
  )
}

export default Uploader
