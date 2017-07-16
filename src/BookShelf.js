import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import {Link} from 'react-router-dom'


class BookShelf extends Component{

  static propTypes = {
    booksOnShelf: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }


render(){

  const shelves = ["currentlyReading","wantToRead","read"]
  const shelvesName= ["Currently Reading", "Want To Read","Read"]


  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div>
      {shelves.map((shelf, index) => {
        return(
          <div key={index} className="list-books-content">
            <div>
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelvesName[index]}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.booksOnShelf.sort(sortBy('title'))
                        .filter(book => book.shelf === shelf)
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
                </div>
              </div>
            </div>
          </div>
        )}
      )}
      </div>

     <div className="open-search">
        <Link to="/Search">Add a book</Link>
      </div>

    </div>
    
  )
}
}
export default BookShelf
