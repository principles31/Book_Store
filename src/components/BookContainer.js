import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import BookContent from './Book';
import { fetchBook } from '../redux/books/books';
import AddBook from './AddBook';

const BookContainer = ({ fetchBooks }) => {
  const infor = useSelector((state) => state.bookReducer);
  const books = infor;
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="main-container">
      <BookContent books={books} />
      <AddBook />
    </div>
  );
};

BookContainer.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBook()),
});

export default connect(null, mapDispatchToProps)(BookContainer);
