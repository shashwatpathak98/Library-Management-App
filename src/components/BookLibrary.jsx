import BookList from "./BookList";


const BookLibrary = ({ showNewBookModal, showModal, hideModal }) => {
  return (
    <>
      <div className="container mx-auto p-4 ">
        <h1 className="text-3xl font-semibold mt-6 mb-4">
          Library Management App
        </h1>
        <button
          onClick={showNewBookModal}
          className="text-1xl border border-red-800 hover:bg-red-500 bg-red-600 rounded-lg px-4 py-2"
        >
          Add Book +
        </button>
      </div>
      <div>
        <BookList modalVisible={showModal} modalHidden={hideModal} />
      </div>
    </>
  );
};

export default BookLibrary;
