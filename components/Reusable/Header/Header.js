import React from 'react'

const Header = ({ name }) => {
  return (
    <div className="bg-black py-10 md:py-24">
      <h2 className="text-center text-white uppercase font-semibold md:font-bold tracking-wider text-3xl md:text-4xl">
        {name}
      </h2>
    </div>
  )
}

export default Header
