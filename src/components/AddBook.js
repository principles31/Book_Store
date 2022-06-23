import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import './AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [infor, setInfor] = useState({ book: '', author: '', category: '' });

  const inputData = (e) => {
    const inputName = e.target.name;
    switch (inputName) {
      case 'title':
        setInfor({ book: e.target.value, author: infor.author, category: infor.category });
        break;
      case 'author':
        setInfor({ book: infor.book, author: e.target.value, category: infor.category });
        break;
      case 'category':
        setInfor({ book: infor.book, author: infor.author, category: e.target.value });
        break;
      default:
        setInfor({ book: infor.book, author: infor.author, category: infor.category });
    }
  };

  return (
    <>
      <div className="add-container">
        <h2>ADD NEW BOOK</h2>
        <form action="#" method="post">
          <input type="text" name="title" className="input" placeholder="Book Title" onChange={inputData} required />
          <input type="text" name="author" className="input" placeholder="Book Author" onChange={inputData} required />
          <input type="text" name="category" className="input" placeholder="category" onChange={inputData} required />
          <button type="button" className="add-btn" onClick={() => dispatch(addBook(infor))}>Add Book</button>
        </form>

      </div>
    </>
  );
};

export default AddBook;
