import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Books = ({ book }) => {
  const [id, [item]] = book;
  const dispatch = useDispatch();

  return (
    <>
      <li key={id} className="books-content">
        {item.title}
        {' by '}
        {item.author}
        {' - '}
        {item.category}
      </li>
      <button type="button" id={id} onClick={() => dispatch(removeBook(id))}>Remove</button>
    </>
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
