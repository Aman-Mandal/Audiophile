import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../../components/CartItem/CartItem'

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items)
  console.log(cartItems)

  return (
    <div className="h-full w-screen bg-neutral-200 py-10">
      <form className="bg-white w-[90%] mx-auto py-10 px-6 rounded-lg h-full">
        <div className="text-xl uppercase font-semibold mb-6 ">Checkout</div>
        <div>
          <h2 className="text-dark-orange text-xs uppercase font-semibold tracking-widest mb-4">
            Billing Details
          </h2>
          <div className="flex flex-col w-full md:flex-row md:gap-6">
            <div className="flex flex-col md:w-1/2">
              <label className="text-[11px] font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="border text-sm  border-slate-200 px-6 py-3 rounded-lg mb-6"
                id="name"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col md:w-1/2">
              <label className="text-[11px] font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="border text-sm  border-slate-200 px-6 py-3 rounded-lg mb-6"
                id="email"
                type="email"
                placeholder="john@email.com"
              />
            </div>
          </div>
          <div className="flex flex-col md:w-1/2">
            <label className="text-[11px] font-medium mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="border text-sm  border-slate-200 px-6 py-3 rounded-lg mb-6"
              id="phone"
              type="number"
              placeholder="+1 202-343-3445"
            />
          </div>
        </div>
        <div>
          <h2 className="text-dark-orange text-xs uppercase font-semibold tracking-widest mb-4">
            Shipping Info
          </h2>
          <div className="flex flex-col">
            <label className="text-[11px] font-medium mb-2" htmlFor="address">
              Address
            </label>
            <input
              className="border text-sm  border-slate-200 px-6 py-3 rounded-lg mb-6"
              id="address"
              type="text"
              placeholder="125 William Street"
            />
          </div>
          <div className="flex flex-col w-full md:flex-row md:gap-6">
            <div className="flex flex-col md:w-1/2">
              <label className="text-[11px] font-medium mb-2" htmlFor="zipcode">
                Zip Code
              </label>
              <input
                className="border text-sm  border-slate-200 px-6 py-3 rounded-lg mb-6"
                id="zipcode"
                type="number"
                placeholder="129797"
              />
            </div>
            <div className="flex flex-col md:w-1/2">
              <label className="text-[11px] font-medium mb-2" htmlFor="country">
                Country
              </label>
              <input
                className="border text-sm  border-slate-200 px-6 py-3 rounded-lg mb-6"
                id="country"
                type="text"
                placeholder="United States"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-dark-orange text-xs uppercase font-semibold tracking-widest mb-4">
            Payment Method
          </h2>
          <div className="flex border items-center px-6 pt-4 rounded-lg mb-4 md:w-1/2">
            <input
              className="border text-sm mr-2 my-2 border-slate-200 px-6 py-3 rounded-lg mb-6"
              id="e-money"
              type="radio"
              name="payment"
            />
            <label className="text-[11px] font-medium mb-2" htmlFor="e-money">
              E-Money
            </label>
          </div>
          <div className="flex border items-center px-6 pt-4 rounded-lg md:w-1/2">
            <input
              className="border mr-2 text-sm my-2 border-slate-200 px-6 py-3 rounded-lg mb-6"
              id="cod"
              type="radio"
              name="payment"
            />
            <label className="text-[11px] font-medium mb-2" htmlFor="cod">
              Cash On Delivery
            </label>
          </div>
        </div>
      </form>

      <section className="bg-white w-[90%] mx-auto my-6 py-10 px-6 rounded-lg h-[30rem] flex flex-col justify-between">
        <div>
          <p className="text-xl uppercase font-semibold mb-6 ">Summary</p>
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
                cart={false}
              />
            ))}
          </div>
        </div>
        <div className="uppercase text-sm space-y-2">
          <div className="flex justify-between">
            <p className="text-[#A17A7A] font-semibold tracking-wider">Total</p>
            <p>$100</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#A17A7A] font-semibold tracking-wider">
              Shipping
            </p>
            <p>$10</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#A17A7A] font-semibold tracking-wider">
              VAT (included)
            </p>
            <p>$2</p>
          </div>
          <div className="flex justify-between py-3">
            <p className="text-[#A17A7A] font-semibold tracking-wider">
              Grand Total
            </p>
            <p className="text-light-orange font-semibold tracking-wider">
              $120
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Checkout
