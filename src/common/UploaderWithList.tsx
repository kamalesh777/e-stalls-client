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
  const [fileList, setFileList] = useState<fileListType[]>(loadFiles || [])

  // store files into uploadFiles
  const filesHandler = (fileList: fileListType[]): void => {
    setFileList(fileList)
  }

  // file Remove Handler
  const onRemoveHandler = (id: string): void => {
    const restFiles = fileList.filter(item => item.id !== id)
    setFileList(restFiles)
  }

  // update to the pure component with the latest data
  useEffect(() => {
    getFiles(fileList)
  }, [fileList.length])

  return listType === 'picture' ? (
    <Row>
      {fileList?.map(file => (
        <Col md={column} key={file.id} className="mb-3">
          <div className="file-list picture">
            <img src={file.thumbnailUrl} className="img-fluid" alt={file.name} />
            <BiTrash className="trash-icon" onClick={() => onRemoveHandler(file.id)} />
          </div>
        </Col>
      ))}
      <Col md={column} className="mb-3">
        <Uploader message="Upload" multiple getUplodedFiles={filesHandler} {...{ fileList, setFileList }} />
      </Col>
    </Row>
  ) : (
    <Row>
      <Col md={12} className="mb-3">
        <Uploader message="Upload" multiple getUplodedFiles={filesHandler} {...{ fileList, setFileList }} />
      </Col>
      {fileList?.map(file => (
        <Col md={column} key={file.id} className="mb-2">
          <div className="file-list text">
            <p className="mb-0">{file.name}</p>
            <BiTrash className="trash-icon" onClick={() => onRemoveHandler(file.id)} />
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default UploaderWithList
