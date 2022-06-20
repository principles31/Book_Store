import { configureStore, combineReducers } from 'redux';
import bookReducer from './books/book';
import checkStatusReducer from './categories/category';

const reducer = combineReducers({
  bookReducer,
  checkStatusReducer,
});

const store = configureStore(reducer);

export default store;
