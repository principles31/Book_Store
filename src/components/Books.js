import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';
import './Books.css';
import 'react-circular-progressbar/dist/styles.css';

const Books = ({ book }) => {
  const [id, [item]] = book;
  const dispatch = useDispatch();
  const percentage = 66;

  return (
    <div className="books-contents">
      <div className="first">
        <li key={id} className="book-cont">
          <span className="category">{item.category}</span>
          <span className="title">{item.title}</span>
          <span className="author">{item.author}</span>
        </li>
        <div className="buttons">
          <button type="button" className="btn border"> Comment</button>
          <button type="button" className="btn border" id={id} onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button" className="btn">Edit</button>
        </div>
      </div>
      <div className="prgs">
        <div className="circular-progressbar" style={{ width: 100, height: 100 }}>
          <CircularProgressbar className="pgs" value={percentage} />
        </div>
        <div className="progres-sec">
          <span className="percentage">
            {`${percentage}%`}
          </span>
          <span className="completed">
            Completed
          </span>
        </div>
      </div>
      <div className="book-ch">
        <span className="current-chapt">CURRENT CHAPTER</span>
        <span className="chapt">Chapter 17</span>
        <button type="button" className="update-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Books;
