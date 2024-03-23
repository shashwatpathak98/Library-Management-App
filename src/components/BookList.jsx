import { useState } from "react";
import Modal from "./Modal";
import AddBookForm from "./AddBookForm";
import BookItem from "./BookItem";

const BookList = ({ modalVisible, modalHidden }) => {
  const [addBook, setAddBook] = useState([]);

  const addBookHandler = (addBookData) => {
    setAddBook((existingBooks) => [addBookData, ...existingBooks]);
  };

  const editBookHandler = (id, updatedBookData) => {
    setAddBook((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, ...updatedBookData } : book
      )
    );
  };

  const deleteBookHandler = (id) => {
    setAddBook((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };
  return (
    <div>
      {modalVisible && (
        <Modal onClose={modalHidden}>
          <AddBookForm onCancel={modalHidden} onAddBook={addBookHandler} />
        </Modal>
      )}

      {addBook.length > 0 && (
        <ul className="list-none max-w-screen-md mx-auto py-4 px-0 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center">
          {addBook.map((book) => (
            <BookItem
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              genre={book.genre}
              rating={book.rating}
              onEdit={editBookHandler}
              onDelete={deleteBookHandler}
            />
          ))}
        </ul>
      )}
      {addBook.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no books added</h2>
          <p>Start Adding the books!</p>
        </div>
      )}
    </div>
  );
};

export default BookList;
