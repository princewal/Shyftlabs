import React from 'react'

function Button({classname, children, onClick, }) {
  return (
    <button className={`btn ${classname ?? ''}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
