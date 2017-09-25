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
// componentDidMount is the lifecycle methods
// it is executed after first render only on the client side .If we need to load data from server ao remote endpoint
// it is used for instantiate the network request.
// If we want to make ajax request then we use the componentDidMount().
componentDidMount() {
  // getAll function belongs to the BooksAPI . it used for get the book details from the sever
  BooksAPI.getAll().then((books) => {
    console.log('anp books', books)
    // it used fro update the local component state of books.
    this.setState({ books })
  })
}


// movebook function used to move the books from one shelf to another shelf.
// when moveBook invoked "(book ,shelf)" it is going to pass a specific book and shelf that was clicked on.

moveBook = (book, shelf) => {
  if (this.state.books) {
      // it update the  book in selected shelf
    BooksAPI.update(book,shelf).then(() => {
      book.shelf = shelf;
      ////this state method is by passing it a function , and this function is going to return new object that is
      // going to merge with current state.
      //2. we use functional setState method , when new state of our components depends on the prevoius state of components.
      // NOTE: UI is the function of  state  in react. once the state changed ,UI will automatically update.
      this.setState(state => ({
          //the current state of the books will concat with new bookshelf.
          //so it returns a new array and we have new books in our shelf.
        books: state.books.filter(b => b.id !== book.id).concat([ book ])
      }))
    })
  }
}


  render() {
    return (
      <div className="App">
      {/* Route takes a path that will match the URL or not.
      //If the path matches , then Route will render some UI, if won't render anything then it does not match.
      //it will render the screen for us.*/}
 {/*It  exact path  matches then it renders the BookShelf component*/}
      <Route exact path="/" render={() => (


          <BookShelf
        /* onMovebook , it's going to reference  the movebook */
            onMoveBook={this.moveBook}
            booksOnShelf={this.state.books}
          />

      )}/>
      /*when the path matches with /Search then it reners the search page.*/
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
