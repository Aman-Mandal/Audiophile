import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(1)

  const increaseCounterHandler = () => {
    setCounter(count => count + 1)
  }
  const decreaseCounterHandler = () => {
    if (counter > 1) {
      setCounter(count => count - 1)
    }
  }
  return (
    <div className="flex ">
      <div className="w-fit bg-neutral-100 ">
        <button
          onClick={decreaseCounterHandler}
          className="bg-neutral-100 px-3 py-2 text-sm rounded-l-md hover:bg-neutral-200 hover:text-dark-orange"
        >
          -
        </button>
        <span className="px-3 text-sm">{counter}</span>
        <button
          onClick={increaseCounterHandler}
          className="bg-neutral-100 px-3 py-2 text-sm rounded-r-md hover:bg-neutral-200 hover:text-dark-orange"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Counter
