import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './Reducer/Store';
import BookList from "./Component/Bookform"
import BookForm from "./Component/Booklist"

const App = () => {
  const [editing, setEditing] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  return (
    <Provider store={store}>
      <div>
        <h1>Book Management System</h1>
        <BookForm currentBook={currentBook} setEditing={setEditing} />
        <BookList setCurrentBook={setCurrentBook} setEditing={setEditing} />
      </div>
    </Provider>
  );
};

export default App;
