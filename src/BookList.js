import React, { Component } from "react";
import Book from "./Book";
import EditBook from "./EditBook";
import NewBook from "./NewBook";

let initialState = {
  subjects: [["Science", false], ["History", false], ["Literature", false]],
  books: [
    {
      subject: "Science",
      title: "Brief History of Time",
      author: "Stephen Hawking",
      year: "2001",
      isEditing: false
    },
    {
      subject: "Science",
      title: "Surely You're Joking, Mr. Feynman",
      author: "Richard Feynman",
      year: "2002",
      isEditing: false
    },
    {
      subject: "Science",
      title: "Pleasure of Finding Things Out",
      author: "Richard Feynman",
      year: "2003",
      isEditing: false
    },
    {
      subject: "History",
      title: "Sapiens: Brief History of Humankind",
      author: "Yuval Noah Harari",
      year: "2001",
      isEditing: false
    },
    {
      subject: "History",
      title: "Silk Roads",
      author: "Peter Frankopan",
      year: "2002",
      isEditing: false
    },
    {
      subject: "History",
      title: "Genghis Khan and the Making of the Modern World",
      author: "Jack Weatherford",
      year: "2003",
      isEditing: false
    },
    {
      subject: "Literature",
      title: "Importance of Being Earnest",
      author: "Oscar Wilde",
      year: "2001",
      isEditing: false
    },
    {
      subject: "Literature",
      title: "Adventures of Sherlock Holmes",
      author: "Arthur Conan Doyle",
      year: "2002",
      isEditing: false
    },
    {
      subject: "Literature",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: "2003",
      isEditing: false
    }
  ]
};

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleAddBook = this.handleAddBook.bind(this);
    this.handleEditBook = this.handleEditBook.bind(this);
  }

  handleOptionChange(idx) {
    this.setState(prevState => {
      console.log(idx);
      let newOptions = [...prevState.subjects];
      newOptions.forEach((arr, i) => {
        arr[i][1] = false;
      });
      console.log(newOptions);
      console.log(newOptions[idx]);
      //   newOptions[idx][1] = true;
      //   console.log(newOptions);
      return { subjects: newOptions };
    });
  }

  handleAddBook(newBook) {
    this.setState(prevState => {
      let newBook = {
        subject: "",
        title: "",
        author: "",
        year: "",
        isEditing: false
      };

      return { books: [...prevState, newBook] };
    });
  }

  handleEditBook(idx) {}

  handleTurnEditOn(idx) {}

  render() {
    let subjects = this.state.subjects.map((arr, idx) => {
      return (
        <div className="radio">
          <label>
            <input
              type="radio"
              key={idx}
              value={arr[0]}
              checked={arr[1]}
              onChange={this.handleOptionChange.bind(this, idx)}
            />
            {arr[0]}
          </label>
        </div>
      );
    });
    let bookList = this.state.books.map((arr, idx) => {});
    return (
      <div>
        <h3>Hello Book List</h3>
        <form>{subjects}</form>
        <Book />
        <EditBook />
        <hr />
        <NewBook handleAdd={this.handleAddBook} />
      </div>
    );
  }
}

export default BookList;
