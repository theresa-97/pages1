import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../Reducer/books/BookSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default store;
