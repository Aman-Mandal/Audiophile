import React from 'react'

const Button = ({ children }) => {
  return (
    <button
      className={`w-40 py-3 rounded bg-light-orange font-medium text-white hover:bg-very-light-orange`}
    >
      {children}
    </button>
  )
}

export default Button
