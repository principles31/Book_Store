import { configureStore, combineReducers } from 'redux';
import bookReducer from '../books/books';
import checkStatusReducer from './categories';

const reducer = combineReducers({
  bookReducer,
  checkStatusReducer,
});

const store = configureStore(reducer);

export default store;
