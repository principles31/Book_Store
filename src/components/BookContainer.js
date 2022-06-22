import React from 'react';
import { useSelector } from 'react-redux';
import BookContent from './Book';
import AddBook from './AddBook';

const BookContainer = () => {
  const books = useSelector((state) => state.bookReducer);
  return (
    <div className="main-container">
      <BookContent books={books} />
      <AddBook />
    </div>
  );
};
export default BookContainer;
