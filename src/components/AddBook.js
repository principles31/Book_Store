import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [infor, setInfor] = useState({ book: '', author: '' });

  const inputData = (e) => {
    const inputName = e.target.name;
    switch (inputName) {
      case 'title':
        setInfor({ book: e.target.value, author: infor.author });
        break;
      case 'author':
        setInfor({ book: infor.book, author: e.target.value });
        break;
      default:
        setInfor({ book: infor.book, author: infor.author });
    }
  };

  return (
    <>
      <div className="add-container">
        <h2>ADD NEW BOOK</h2>
        <form action="#" method="post">
          <input type="text" name="title" placeholder="Book Title" onChange={inputData} required />
          <input type="text" name="author" placeholder="Book Author" onChange={inputData} required />
          <button type="button" onClick={() => dispatch(addBook(infor))}>Add Book</button>
        </form>

      </div>
    </>
  );
};

export default AddBook;
