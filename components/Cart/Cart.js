import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import emptyCart from '../../assets/empty-cart.png'
import Image from 'next/image'

const Backdrop = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 h-screen w-screen bg-black/75"
    ></div>
  )
}

const Cart = ({ onClose }) => {
  const cartItems = useSelector(state => state.cart.items)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  const router = useRouter()

  const checkoutCartHandler = () => {
    router.push('/checkout')
    onClose()
  }

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
                  cart={true}
                />
              ))}
            </div>
          </div>
          {cartItems.length === 0 && <Image height={1200} width={400} src={emptyCart} />}

          <div>
            <div className="flex justify-between py-3">
              <h2 className="tracking-wider text-gray-600 uppercase font-semibold">
                Total
              </h2>
              <p>$ {totalPrice}</p>
            </div>
            <div className="text-center">
              <Button onClick={checkoutCartHandler} bgColor="light-orange">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
