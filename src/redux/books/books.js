const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

const initialBook = [];

const bookReducer = (state = initialBook, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const objBook = {
        id: state.length + 1,
        author: action.book.author,
        book: action.book.book,
      };
      return [...state, objBook];
    }

    case REMOVE_BOOK: {
      const remove = state.filter((book) => book.id !== action.id);

      return remove;
    }

    default:
      return state;
  }
};

export const addBook = (book) => ({ type: ADD_BOOK, book });
export const removeBook = (id) => ({
  type: REMOVE_BOOK, id,
});
export default bookReducer;
