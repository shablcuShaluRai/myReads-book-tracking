import React, { Component } from 'react';
import BookShelf from './BookShelf'
import Search from './Search'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import './App.css';


class App extends Component {

  state = {
    books : []

  }
//lifecycle event get data from Api
//to get all book from server
componentDidMount() {
  BooksAPI.getAll().then((books) => {
    console.log('anp books', books);
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


          <BookShelf
            onMoveBook={this.moveBook}
            booksOnShelf={this.state.books}
          />

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
