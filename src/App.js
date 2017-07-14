import React, { Component } from 'react';
import BookShelf from './BookShelf'
import Book from './Book'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import './App.css';


class App extends Component {

  state = {
    book : []
  }
//lifecycle event get data from Api
//to get all book from server
componentDidMount(){
BooksAPI.getAll().then((books) => {

  this.setState({books:books})

})
}



moveBook = (book, shelf) => {
  if (this.state.books) {
    BooksAPI.update(book,shelf).then(() => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([ book ])
      }))
    })
  }
}


  render() {
    return (
      <div className="App">
       <BookShelf
        onMoveBook={this.moveBook}
        booksOnShelf = {this.state.book}
       />


      </div>
    );
  }
}

export default App;
