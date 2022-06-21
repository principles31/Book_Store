import { createStore, combineReducers } from 'redux';
import bookReducer from './books/books';
import checkStatusReducer from './categories/categories';

const reducer = combineReducers({
  bookReducer,
  checkStatusReducer,
});

const store = createStore(reducer);

export default store;
