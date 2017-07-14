import React, { Component } from 'react';
import BookShelf from './BookShelf'
import Search from './Search'
import {Link} from 'react-router-dom'
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
componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
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
      <Route exact path="/" render={() => (
        <div className="list-books">

          <BookShelf
            onMoveBook={this.moveBook}
            booksOnShelf={this.state.books}
          />
          <div className="open-search">
            <Link to="/Search">Add a book</Link>
          </div>
        </div>
      )}/>
      <Route path="/Search" render={() => (
        <Search
          onMoveBook={this.moveBook}
          booksOnShelf={this.state.books}
        />
      )}/>
    </div>
    );
  }
}

export default App;
