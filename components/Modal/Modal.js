// import { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom'

// const Backdrop = ({ onClick }) => {
//   return (
//     <div
//       // onClick={onClick}
//       className="fixed top-0 left-0 w-full h-screen z-20 bg-black/75"
//     ></div>
//   )
// }

// const ModalOverlay = ({ children }) => {
//   return (
//     <div className="fixed top-[15vh] z-40 right-[5%] w-[30vw] bg-white p-[1rem] rounded-lg shadow-lg">
//       <div className="">{children}</div>
//     </div>
//   )
// }

// const Modal = ({ children }) => {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)

//     return () => setMounted(false)
//   }, [])

//   return mounted ? (
//     <div>
//       {ReactDOM.createPortal(<Backdrop />, document.getElementById('modal'))}
//       {ReactDOM.createPortal(
//         <ModalOverlay>{children}</ModalOverlay>,
//         document.getElementById('modal')
//       )}
//     </div>
//   ) : null
// }

// export default Modal
