import { useRef, useEffect, useState } from "react";
import classes from "./BookItem.module.css";
import { HiTrash } from "react-icons/hi2";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const BookItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedAuthor, setEditedAuthor] = useState(props.author);
  const [editedGenre, setEditedGenre] = useState(props.genre);
  const [editedRating, setEditedRating] = useState(props.rating);

  const handleEditToggle = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleEditSave = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        props.onEdit(props.id, {
          title: editedTitle,
          author: editedAuthor,
          genre: editedGenre,
          rating: editedRating,
        });
        setIsEditing(false);
        Swal.fire({
          title: "Saved!",
          text: "Your Book has been saved.",
          icon: "success",
          timer: 1500,
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const handleEditCancel = () => {
    setEditedTitle(props.title);
    setEditedAuthor(props.author);
    setEditedGenre(props.genre);
    setEditedRating(props.rating);
    setIsEditing(false);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        props.onDelete(props.id);
        Swal.fire({
          title: "Deleted!",
          text: "Your book has been deleted.",
          icon: "success",
          timer: 1500,
        });
      }
    });
  };
  return (
    <li className="post bg-purple-200 rounded-lg p-4 shadow-md animate-in">
      {isEditing ? (
        <textarea
          value={editedTitle}
          onChange={(event) => setEditedTitle(event.target.value)}
          className="text bg-gray-300 p-2 rounded-md w-full text-gray-700 text-lg font-bold"
          spellCheck={false}
          rows={3}
        />
      ) : (
        <p className={classes.author}>{props.title}</p>
      )}

      {isEditing ? (
        <textarea
          value={editedAuthor}
          onChange={(event) => setEditedAuthor(event.target.value)}
          className={classes.text}
          spellCheck={false}
          rows={3}
        />
      ) : (
        <p className={classes.text}>{props.author}</p>
      )}

      {isEditing ? (
        <textarea
          value={editedGenre}
          onChange={(event) => setEditedGenre(event.target.value)}
          className={classes.text}
          spellCheck={false}
          rows={3}
        />
      ) : (
        <p className={classes.text}>{props.genre}</p>
      )}

      {isEditing ? (
        <textarea
          value={editedRating}
          onChange={(event) => setEditedRating(event.target.value)}
          className={classes.text}
          spellCheck={false}
          rows={3}
        />
      ) : (
        <p className={classes.text}>{props.rating}</p>
      )}

      <div>
        {isEditing ? (
          <div>
            <button
              className="inline-flex text-white bg-green-500 border-0 py-1 mx-2 px-4 focus:outline-none hover:bg-green-600 rounded"
              onClick={handleEditSave}
            >
              Save
            </button>
            <button
              className="inline-flex text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded"
              onClick={handleEditCancel}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="container">
            <button className="btn-edit" onClick={handleEditToggle}>
              <FaRegEdit />
            </button>
            <button className="btn-del" onClick={handleDelete}>
              <HiTrash />
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default BookItem;
