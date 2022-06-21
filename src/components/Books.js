import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Books = (props) => {
  const {
    book: {
      books,
      author,
      id,
      category,
    },

  } = props;
  const dispatch = useDispatch();

  return (
    <>
      <li key={id} className="books-content">
        {books}
        {' by '}
        {author}
        {' - '}
        {category}
      </li>
      <button type="button" id={id} onClick={() => dispatch(removeBook(id))}>Remove</button>
    </>
  );
};

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    books: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Books;
