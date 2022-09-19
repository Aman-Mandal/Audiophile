import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'

const Backdrop = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 h-screen w-screen bg-black/75"
    ></div>
  )
}

const Cart = ({ children, onClose }) => {
  return (
    <>
      <Backdrop onClose={onClose} />
      <div className="absolute  z-10 bg-white h-[70vh] top-24 right-32 w-[28%] rounded-lg px-10 py-8">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col h-full ">
            <div className="flex items-baseline justify-between mb-8">
              <p className="text-lg font-semibold">My Cart</p>
              <button
                onClick={onClose}
                className="text-2xl font-semibold hover:text-dark-orange hover:scale-110"
              >
                x
              </button>
            </div>
            <div>
              <CartItem />
              <CartItem />
            </div>
          </div>
          <div className="text-center">
            <Button bgColor="dark-orange">Checkout</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
