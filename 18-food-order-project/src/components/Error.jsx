import React from 'react'

function ErrorMsg({title, message}) {
  return (
    <div className='error'>
        <h2>{title}</h2>
        <p>{message}</p>
    </div>
  )
}

export default ErrorMsg;