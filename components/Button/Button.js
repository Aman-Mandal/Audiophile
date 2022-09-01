import React from 'react'

const Button = ({ children, bgColor, hoverColor }) => {
  return (
    <button
      className={`w-40 py-3 rounded bg-${bgColor} uppercase text-sm tracking-wide font-medium text-white ${hoverColor}`}
    >
      {children}
    </button>
  )
}

export default Button
