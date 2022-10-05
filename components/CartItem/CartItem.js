import Image from 'next/image'
import { cartActions } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({ id, total, img, name, price, quantity = 0, cart }) => {
  const dispatch = useDispatch()

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id))
  }

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        img,
        price,
        name,
      })
    )
  }

  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-3">
        <div>
          <Image className="rounded-lg" src={img} height={65} width={65} />
        </div>
        <div>
          <p className="text-base uppercase font-bold">{name}</p>
          <p className="text-sm py-2 text-neutral-400">$ {total}</p>
        </div>
      </div>
      {cart ? (
        <div className="flex">
          <button
            className="bg-neutral-100 px-3 py-2 text-sm rounded-l-md hover:bg-neutral-200 hover:text-dark-orange"
            onClick={removeItemHandler}
          >
            -
          </button>
          <p className="px-3 my-auto bg-neutral-100 py-2 text-sm">{quantity}</p>
          <button
            className="bg-neutral-100 px-3 py-2 text-sm rounded-l-md hover:bg-neutral-200 hover:text-dark-orange"
            onClick={addItemHandler}
          >
            +
          </button>
        </div>
      ) : (
        <p>{quantity}x</p>
      )}
    </div>
  )
}

export default CartItem
