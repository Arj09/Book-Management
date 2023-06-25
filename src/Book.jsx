import React, { useState } from 'react';
import './Book.css';

const Book = () => {
  const [data, setData] = useState([]);
  const [form, setform] = useState({});
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState();
  const [update_data, setUpdate_data] = useState({});

  const handleTitle = (e) => {
    setform({ ...form, title: e.target.value });
  };

  const handleAuthor = (e) => {
    setform({ ...form, author: e.target.value });
  };

  const handleyear = (e) => {
    setform({ ...form, year: e.target.value });
  };

  const handleISBN = (e) => {
    setform({ ...form, ISBN: e.target.value });
  };

  const handlePublished = (e) => {
    setform({ ...form, Published: e.target.value });
  };

  const add = () => {
    if (form.title && form.ISBN && form.Published && form.year && form.author) {
      setData([...data, form]);
      setform({ title: '', author: '', Published: '', ISBN: '', year: '' });
    } else {
      alert('All mandatory fields have to be filled');
    }
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  const update = (index) => {
    setIndex(index);
    setShow(false);
  };

  const update_detail = () => {
    if (
      !update_data.title ||
      !update_data.author ||
      !update_data.year ||
      !update_data.Published ||
      !update_data.ISBN
    ) {
      alert('All mandatory fields have to be filled');
    } else {
      data[index].title = update_data.title;
      data[index].author = update_data.author;
      data[index].year = update_data.year;
      data[index].Published = update_data.Published;
      data[index].ISBN = update_data.ISBN;
      setUpdate_data({
        title: '',
        author: '',
        Published: '',
        ISBN: '',
        year: '',
      });

      setShow(true);
    }
  };

  return (
    <div>
      {show ? (
        <div>
          <div class="book-title">Add Books & Details</div>
          <div class="mid">
            <input
              type="text"
              placeholder="Title"
              onChange={handleTitle}
              value={form.title}
            />
            <input
              type="text"
              placeholder="Author name"
              onChange={handleAuthor}
              value={form.author}
            />
            <input
              type="text"
              placeholder="Year"
              onChange={handleyear}
              value={form.year}
            />
            <input
              type="text"
              placeholder="ISBN"
              onChange={handleISBN}
              value={form.ISBN}
            />
            <input
              type="Date"
              placeholder="Published"
              onChange={handlePublished}
              value={form.Published}
            />
            <button onClick={add}> Add Book</button>
          </div>
          <div className="book-title1">Books</div>
          <hr />

          <div className="container1">
            {data.map((book, index) => {
              return (
                <ul className="box" key={index}>
                  <li className="title">{book.title}</li>
                  <li className="author">{book.author}</li>
                  <li className="year">{book.year}</li>
                  <li className="published">{book.Published}</li>
                  <li className="ISBN">{book.ISBN}</li>
                  <li className="action">
                    <button
                      className="delete"
                      onClick={() => removeItem(index)}
                    >
                      Delete
                    </button>
                    <button className="update" onClick={() => update(index)}>
                      Update
                    </button>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div class="book-title">Update Books & Details</div>
          <div class="mid">
            <input
              type="text"
              name=""
              placeholder="Title"
              onChange={(event) =>
                setUpdate_data({ ...update_data, title: event.target.value })
              }
              value={update_data.title}
            />
            <input
              type="text"
              name=""
              placeholder="Author name"
              onChange={(event) =>
                setUpdate_data({ ...update_data, author: event.target.value })
              }
              value={update_data.author}
            />
            <input
              type="text"
              name=""
              placeholder="Year"
              onChange={(event) =>
                setUpdate_data({ ...update_data, year: event.target.value })
              }
              value={update_data.year}
            />
            <input
              type="text"
              name=""
              placeholder="ISBN"
              onChange={(event) =>
                setUpdate_data({ ...update_data, ISBN: event.target.value })
              }
              value={update_data.ISBN}
            />
            <input
              type="Date"
              name=""
              placeholder="Published"
              onChange={(event) =>
                setUpdate_data({
                  ...update_data,
                  Published: event.target.value,
                })
              }
              value={update_data.Published}
            />
            <button onClick={() => update_detail()}>Update</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
