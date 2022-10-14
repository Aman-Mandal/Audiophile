import { useSelector } from 'react-redux'
import CartItem from '../../components/CartItem/CartItem'
import useInput from '../../hooks/useInput'

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  const shippingPrice = Math.floor(totalPrice / 100)
  const vatPrice = Math.round(totalPrice / 1000)
  const grandTotal = shippingPrice + vatPrice + totalPrice
  console.log(cartItems)

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim !== '')

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemailInput,
  } = useInput(value => value.includes('@'))

  const {
    value: enteredPhoneNumber,
    isValid: enteredPhoneNumberIsValid,
    hasError: phoneNumberHasError,
    valueChangeHandler: phoneNumberChangedHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetphoneNumberInput,
  } = useInput(value => value.length >= 10 && value.length <= 12)

  const {
    value: enteredAddress,
    isValid: enteredAddressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangedHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddressInput,
  } = useInput(value => value.trim !== '')

  const {
    value: enteredZipCode,
    isValid: enteredZipCodeIsValid,
    hasError: zipCodeHasError,
    valueChangeHandler: zipCodeChangedHandler,
    inputBlurHandler: zipCodeBlurHandler,
    reset: resetZipCodeInput,
  } = useInput(value => value.length === 6)

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangedHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput(value => value.trim !== '')

  const {
    value: enteredCountry,
    isValid: enteredCountryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangedHandler,
    inputBlurHandler: countryBlurHandler,
    reset: resetCountryInput,
  } = useInput(value => value.trim !== '')

  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const submitFormHandler = event => {
    event.preventDefault()

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return
    }
    resetNameInput()
  }

  return (
    <div className="flex flex-col md:flex-row gap-5 h-full w-screen bg-neutral-200 md:py-36 md:px-32 py-10">
      <form
        onSubmit={submitFormHandler}
        className="md:flex-[0.7] bg-white w-[90%] mx-auto py-10 px-8 rounded-lg h-full"
      >
        <div className="text-xl uppercase font-semibold mb-6 ">Checkout</div>
        <div className="mb-12">
          <h2 className="text-dark-orange text-xs uppercase font-semibold tracking-widest mb-4">
            Billing Details
          </h2>
          <div className="flex flex-col w-full md:flex-row md:gap-6">
            <div className="flex flex-col md:w-1/2">
              <label className="text-[11px] font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="border-2 text-sm  border-gray-300 px-6 py-4 rounded-lg mb-6 hover:border-light-orange focus:border-none focus:outline-light-orange"
                id="name"
                type="text"
                placeholder="John Doe"
                onChange={nameChangedHandler}
                onBlur={nameBlurHandler}
                value={enteredName}
              />
              {nameInputHasError && <p className="">Name can't be empty.</p>}
            </div>
            <div className="flex flex-col md:w-1/2">
              <label className="text-[11px] font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="border-2 text-sm  border-gray-300 px-6 py-4 rounded-lg mb-6 hover:border-light-orange focus:border-none focus:outline-light-orange"
                id="email"
                type="email"
                placeholder="john@email.com"
                onChange={emailChangedHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
              />
            </div>
          </div>
          <div className="flex flex-col md:w-[48%]">
            <label className="text-[11px] font-medium mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="border-2 text-sm  border-gray-300 px-6 py-4 rounded-lg hover:border-light-orange focus:border-none focus:outline-light-orange"
              id="phone"
              type="number"
              placeholder="+1 202-343-3445"
              onChange={phoneNumberChangedHandler}
              onBlur={phoneNumberBlurHandler}
              value={enteredPhoneNumber}
            />
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-dark-orange text-xs uppercase font-semibold tracking-widest mb-4">
            Shipping Info
          </h2>
          <div className="flex flex-col">
            <label className="text-[11px] font-medium mb-2" htmlFor="address">
              Address
            </label>
            <input
              className="border-2 text-sm  border-gray-300 px-6 py-4 rounded-lg hover:border-light-orange mb-6 focus:border-none focus:outline-light-orange"
              id="address"
              type="text"
              placeholder="125 William Street"
              onChange={addressChangedHandler}
              onBlur={addressBlurHandler}
              value={enteredAddress}
            />
          </div>
          <div className="flex flex-col w-full md:flex-row md:gap-6">
            <div className="flex flex-col md:w-1/2">
              <label className="text-[11px] font-medium mb-2" htmlFor="zipcode">
                Zip Code
              </label>
              <input
                className="border-2 text-sm  border-gray-300 px-6 py-4 rounded-lg mb-6 hover:border-light-orange focus:border-none focus:outline-light-orange"
                id="zipcode"
                type="number"
                placeholder="129797"
                onChange={zipCodeChangedHandler}
                onBlur={zipCodeBlurHandler}
                value={enteredZipCode}
              />
            </div>
            <div className="flex flex-col md:w-1/2">
              <label className="text-[11px] font-medium mb-2" htmlFor="city">
                City
              </label>
              <input
                className="border-2 text-sm  border-gray-300 px-6 py-4 rounded-lg  hover:border-light-orange focus:border-none focus:outline-light-orange"
                id="city"
                type="text"
                placeholder="New York"
                onChange={cityChangedHandler}
                onBlur={cityBlurHandler}
                value={enteredCity}
              />
            </div>
          </div>
          <div className="flex flex-col w-[48%]">
            <label className="text-[11px] font-medium mb-2" htmlFor="country">
              Country
            </label>
            <input
              className="border-2 text-sm  border-gray-300 px-6 py-4 rounded-lg  hover:border-light-orange focus:border-none focus:outline-light-orange"
              id="country"
              type="text"
              placeholder="United States"
              onChange={countryChangedHandler}
              onBlur={countryBlurHandler}
              value={enteredCountry}
            />
          </div>
        </div>
        <div>
          <h2 className="text-dark-orange text-xs uppercase font-semibold tracking-widest mb-4">
            Payment Method
          </h2>
          <div className="flex border items-center px-6 pt-4 rounded-lg mb-4 md:w-1/2">
            <input
              className="border text-sm -2mr-2 my-2 border-gray-300 px-6 py-4 rounded-lg mb-6 hover:border-light-orange focus:border-none focus:outline-light-orange"
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
              className="border mr-2 tex-2t-sm my-2 border-gray-300 px-6 py-4 rounded-lg mb-6"
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

      {/* Summary Section*/}
      <section className="md:flex-[0.3] md:sticky md:top-[8rem] bg-white w-[90%] mx-auto  py-10 px-6 rounded-lg h-[30rem] flex flex-col justify-between">
        <div>
          <p className="text-xl uppercase font-semibold mb-6 ">Summary</p>
          <div className='overflow-y-scroll'>
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
        <div className="uppercase text-sm space-y-2 flex flex-col">
          <div className="flex justify-between">
            <p className="text-gray-500 font-semibold tracking-wider">Total</p>
            <p>${totalPrice}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500 font-semibold tracking-wider">
              Shipping
            </p>
            <p>${shippingPrice}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500 font-semibold tracking-wider">
              VAT (included)
            </p>
            <p>${vatPrice}</p>
          </div>
          <div className="flex justify-between py-3">
            <p className="text-gray-500 font-semibold tracking-wider">
              Grand Total
            </p>
            <p className="text-light-orange font-semibold tracking-wider">
              ${grandTotal}
            </p>
          </div>
          <button
            type="submit"
            onClick={submitFormHandler}
            className="py-4 bg-light-orange px-4 text-white rounded-lg uppercase font-semibold tracking-wider"
          >
            Continue & Pay
          </button>
        </div>
      </section>
    </div>
  )
}

export default Checkout
