import React from 'react'
import './ErrorMessage.scss'

interface Props {
  message: string
}
const ErrorMessage = ({ message }: Props) => {
  return (
    <div className="message-wrapper">
      <div className="message">{message}</div>
    </div>
  )
}

export default ErrorMessage
