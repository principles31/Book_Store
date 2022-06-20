import { configureStore, combineReducers } from 'redux';
import bookReducer from './books/books.js';
import checkStatusReducer from './categories/categories.js';

const reducer = combineReducers({
  bookReducer,
  checkStatusReducer,
});

const store = configureStore(reducer);

export default store;
