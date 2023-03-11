import React from 'react'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface argTypes {
  errorType: 'error' | 'info' | 'success' | 'warning'
  message: string
}

const ToastWrapper = (): JSX.Element => (
  <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Toast = (errorType: argTypes['errorType'], message: argTypes['message']) =>
  toast[errorType](message, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    theme: 'light',
  })
export default ToastWrapper
