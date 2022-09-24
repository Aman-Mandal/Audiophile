import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import { useSelector } from 'react-redux'

const Backdrop = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 h-screen w-screen bg-black/75"
    ></div>
  )
}

const Cart = ({ children, onClose }) => {
  const cartItems = useSelector(state => state.cart.items)

  return (
    <>
      <Backdrop onClose={onClose} />
      <div className="absolute  z-10 bg-white h-[60vh] min-w-[22rem]   rounded-lg px-10 py-8 md:h-[70vh] md:w-[25vw] top-24 md:right-32">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col h-full overflow-y-auto scrollbar-hide">
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
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  name={item.name.slice(0, 4)}
                  price={item.price}
                  quantity={item.quantity}
                  total={item.totalPrice}
                />
              ))}
            </div>
          </div>
          <div>
            <div>
              <h2>Total</h2>
            </div>
            <div className="text-center">
              <Button bgColor="light-orange">Checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
