import React from 'react';
import BookContent from './Book';
import AddBook from './AddBook';

const BookContainer = () => {
  const books = [
    {
      title: 'The watchtower',
      author: 'Emmanuel',
      id: 1,
      category: 'Novel',
    },
    {
      title: 'Awake',
      author: 'Mensah',
      id: 2,
      category: 'Novel',
    },
  ];

  return (
    <div className="main-container">
      <BookContent books={books} />
      <AddBook />
    </div>
  );
};
export default BookContainer;
