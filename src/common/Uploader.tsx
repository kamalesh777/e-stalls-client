import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { BiCloudUpload } from 'react-icons/bi'
import { distinct, getBase64, randomKeyGenerator } from '@/utils/commonFUnctions'
import { Toast } from './ToastMessage'
interface propTypes {
  message: string
  multiple?: boolean
  getUplodedFiles: (arr: fileListType[]) => void
  fileList: fileListType[]
  setFileList: (params) => fileListType[]
}

interface fileListType {
  id: string
  thumbnailUrl: string
  size: number
  type: string
  name: string
  url?: string
}

const Uploader = ({ message, multiple, getUplodedFiles, fileList, setFileList }: propTypes): JSX.Element => {
  const fileHandler = (target): void => {
    const filesArr = [...target.files]
    // make trnsform of the image with base64
    filesArr.map(file =>
      getBase64(file, cb => {
        // it will check image size less than 2 mb
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isLt2M) {
          Toast('error', 'File must be less than 2 mb')
        } else {
          const newFileArr = {
            id: randomKeyGenerator(3),
            name: file.name,
            size: file.size,
            type: file.type,
            thumbnailUrl: cb,
          }
          // const data = fileList.concat(newFileArr)
          setFileList(prevState => [...prevState, newFileArr])
        }
      }),
    )
  }

  useEffect(() => {
    const freshArray = distinct(fileList, ['name'], false)
    getUplodedFiles(freshArray as unknown as fileListType[])
  }, [fileList?.length])

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
