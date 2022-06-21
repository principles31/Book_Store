import { useState } from 'react';

const AddBook = () => {
  const [infor, setInfor] = useState({ books: '', author: '' });

  const inputData = (e) => {
    const inputName = e.target.name;
    switch (inputName) {
      case 'title':
        setInfor({ books: e.target.value, author: infor.author });
        break;
      case 'author':
        setInfor({ books: infor.books, author: e.target.value });
        break;
      default:
        setInfor({ books: infor.books, author: infor.author });
    }
  };

  const storeData = () => {};

  return (
    <>
      <div className="add-container">
        <h2>ADD NEW BOOK</h2>
        <form action="#" method="post">
          <input type="text" name="title" placeholder="Book Title" onChange={inputData} />
          <input type="text" name="author" placeholder="Book Author" onChange={inputData} />
          <button type="button" onClick={storeData}>Add Book</button>
        </form>

      </div>
    </>
  );
};

export default AddBook;
