import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import checkStatusReducer from './categories/categories';

const reducer = combineReducers({
  bookReducer,
  checkStatusReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
