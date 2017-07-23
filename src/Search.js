import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'

class Search extends Component {

  static propTypes = {
    booksOnShelf: PropTypes.array,
    onMoveBook: PropTypes.func.isRequired
  }

// it takes the query for searching the book and also it can  change the state of books.

  state = {
    query: '',
    books: []
  }

  //it takes the query in paramter and update the state .
  updateQuery = (query) => {
    if (!query) {
      //when no query , then it clears the  the query and shows the books in an array.
      this.setState({query: '', books: []})
    } else {
      //udate the state by using object and it trim off the whitespaces around the query.
      this.setState({ query: query.trim() })
      //search method call from the BooksAPI ,it takes the query then matches the books with query.
      BooksAPI.search(query).then((books) => {
        //if books not found on the server ,then it shows the any book which matches with some string in query available on server.
        if (books.error) {
          books = []
        }
        // it creates a new array of the books , which filter current booksOnShelf , which bookid is equal to id of book,
        //then creates a new array in the selected shelf.
        books.map(book => (this.props.booksOnShelf.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
        this.setState({books})
      })
    }
  }

  render () {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.state.books.sort(sortBy('title'))
                  .map(book => (
                    <Book
                      onMoveBook={this.props.onMoveBook}
                      key={book.id}
                      book={book}
                    />
                  ))
                }
              </ol>
            </div>
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
