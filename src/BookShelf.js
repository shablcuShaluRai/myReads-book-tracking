import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import {Link} from 'react-router-dom'


class BookShelf extends Component{

  static propTypes = {
    // propTypes allows us to do is it allows us to specify the  specific types of the props that are passing
    //into specific component  and we also are allowed to specify if thery are required or not .
    //if we are not passing data as propTypes required , then it throws an error on console  and  app will not work.
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
      {/* to create a new array in the specific shelves
        //The map() method creates a new array with the results
        //of calling a provided function on every element in the calling array.*/}
      {shelves.map((shelf, index) => {
        return(
          <div key={index} className="list-books-content">
            <div>
              <div>
                <div className="bookshelf">
                    {/* we can get the name of shelves at the index (e.g shelvesName[0] = Currently Reading)*/}
                  <h2 className="bookshelf-title">{shelvesName[index]}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {/*it sorts the book by book's title name*/}
                      {this.props.booksOnShelf.sort(sortBy('title'))
                        /*it creates a new array with all books in their realted shelf.*/
                        .filter(book => book.shelf === shelf)
                        /* it creates a new array with all the property of book.js  */
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
