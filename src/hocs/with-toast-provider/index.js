import React from 'react'
import { ToastProvider } from 'react-toast-notifications'

const withToastProvider = (Component, options) => props => (
  <ToastProvider {...options}>
    <Component {...props} />
  </ToastProvider>
)

export default withToastProvider
