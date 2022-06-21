import React from 'react';
import { useSelector } from 'react-redux';
import BookContent from './Book';
import AddBook from './AddBook';

const BookContainer = () => {
  const infor = useSelector((state) => state.bookReducer);
  const books = infor;
  return (
    <div className="main-container">
      <BookContent books={books} />
      <AddBook />
    </div>
  );
};
export default BookContainer;
