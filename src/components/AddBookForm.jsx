import { useState } from "react"
import {v4 as uuidv4} from "uuid"
import Swal from "sweetalert2"
import classes from "./AddBookForm.module.css" 


const AddBookForm = ({onCancel , onAddBook}) => {

  const [addTitle , setAddTitle] = useState("");
  const [addAuthor, setAddAuthor] = useState("");
  const [addGenre, setAddGenre] = useState("");
  const [addRating, setAddRating] = useState("");
 
  const submitHandler = async (event) => {
      event.preventDefault();
      const bookData = {
        id: uuidv4(),
        title: addTitle,
        author: addAuthor,
        genre: addGenre,
        rating: addRating
      }

      await Swal.fire({
        position: "top",
        title: "Success!",
        text: "Your book has been added.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      })

      onAddBook(bookData)
      onCancel()
  }

  return (
    <form className="bg-purple-700 p-4 rounded-s w-80" onSubmit={submitHandler}>
        <p>
        <label htmlFor="title" className="block text-white font-bold mb-1"> Title </label>
        <textarea id="title" className="w-full h-10 p-2 rounded-md bg-purple-300 text-black font-semibold" required rows={3} spellCheck={false} onChange={(event) => setAddTitle(event.target.value)} />
      </p> 
      <p>
        <label  className="block text-white font-bold mb-1" htmlFor="author"> Author </label>
        <input className="w-full h-10 p-2 mb-1 rounded-md bg-purple-300 text-black font-semibold" type="text" id="author" required spellCheck={false} onChange={(event) => setAddAuthor(event.target.value)} />
      </p>  
      <p>
        <label className="block text-white font-bold mb-1"  htmlFor="genre"> Genre </label>
        <input className="w-full h-10 p-2 mb-1 rounded-md bg-purple-300 text-black font-semibold" type="text" id="genre" required spellCheck={false} onChange={(event) => setAddGenre(event.target.value)} />
      </p>
      <p>
        <label className="block text-white font-bold mb-1" htmlFor="rating"> Rating </label>
        <input className="w-full h-10 p-2 mb-1 rounded-md bg-purple-300 text-black font-semibold" type="text" id="rating" required spellCheck={false} onChange={(event) => setAddRating(event.target.value)} />
      </p>
      <br />
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  )
}

export default AddBookForm