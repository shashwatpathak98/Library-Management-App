import { useState } from 'react'
import './App.css'
import BookLibrary from './components/BookLibrary'

function App() {
  const [modalIsVisible , setModalIsVisible] =  useState(false)

  const  showModalHandler = () => {
       setModalIsVisible(true) 
  }

  const hideModalHandler = () => {
       setModalIsVisible(false)
  }
  return (
    <>
        <BookLibrary showNewBookModal={showModalHandler} showModal={modalIsVisible} hideModal={hideModalHandler}/>
    </>
  )
}

export default App
