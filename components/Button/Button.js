import React from 'react'

const Button = ({ children, bgColor, hoverColor, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-40 py-3 rounded bg-${bgColor} uppercase text-sm tracking-wide font-medium text-white ${hoverColor} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
