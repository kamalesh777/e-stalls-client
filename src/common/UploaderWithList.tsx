import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { BiTrash } from 'react-icons/bi'
import Uploader from './Uploader'

interface fileListType {
  id: string
  thumbnailUrl: string
  size: number
  type: string
  name: string
  url?: string
}

interface propTypes {
  column: number
  listType?: 'picture' | 'text'
  loadFiles?: fileListType[]
  getFiles?: (fileList: fileListType[]) => void
}

const UploaderWithList = ({ column, listType = 'picture', loadFiles, getFiles }: propTypes): JSX.Element => {
  const [uploadFiles, setUploadFiles] = useState<fileListType[]>(loadFiles || [])

  // store files into uploadFiles
  const filesHandler = (fileList: fileListType[]): void => {
    setUploadFiles(fileList)
  }

  // file Remove Handler
  const onRemoveHandler = (id: string): void => {
    const restFiles = uploadFiles.filter(item => item.id !== id)
    setUploadFiles(restFiles)
  }

  // update to the pure component with the latest data
  useEffect(() => {
    getFiles(uploadFiles)
  }, [uploadFiles.length])

  return listType === 'picture' ? (
    <Row>
      {uploadFiles?.map(file => (
        <Col md={column} key={file.id} className="mb-3">
          <div className="file-list picture">
            <img src={file.thumbnailUrl} className="img-fluid" alt={file.name} />
            <BiTrash className="trash-icon" onClick={() => onRemoveHandler(file.id)} />
          </div>
        </Col>
      ))}
      <Col md={column} className="mb-3">
        <Uploader message="Upload" multiple getUplodedFiles={filesHandler} {...{ uploadFiles }} />
      </Col>
    </Row>
  ) : (
    <Row>
      <Col md={12} className="mb-3">
        <Uploader message="Upload" multiple getUplodedFiles={filesHandler} {...{ uploadFiles }} />
      </Col>
      {uploadFiles?.map(file => (
        <Col md={column} key={file.id} className="mb-3">
          <div className="file-list">
            <p className="mb-2 p-3">{File.name}</p>
            <BiTrash className="trash-icon" onClick={() => onRemoveHandler(file.id)} />
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default UploaderWithList
