import React from 'react'
import { Modal } from 'react-bootstrap'

interface propTypes {
  openModal: boolean
  setOpenModal: (params: boolean) => void
  children: React.ReactNode
  classes?: string
}

const ModalWrapper = ({ openModal, setOpenModal, children, classes }: propTypes): JSX.Element => {
  // modal close handler
  const handleClose = (): void => {
    setOpenModal(false)
  }
  return (
    <Modal centered show={openModal} onHide={handleClose} animation={false} className={classes}>
      {children}
    </Modal>
  )
}

export default ModalWrapper
