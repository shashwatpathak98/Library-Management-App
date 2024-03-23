
const Modal = ({children , onClose}) => {
  return (
    <>
       <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-50" onClick={onClose}  />

       <dialog open={true} className="border-none rounded-md shadow-md p-0 overflow-hidden z-50"> 
          {children}
       </dialog>   
    </>
  )
}

export default Modal