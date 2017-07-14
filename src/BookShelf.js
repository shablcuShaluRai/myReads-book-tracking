import React, { Component } from 'react'
import Book from './Book'
import sortBy from 'sort-by'
class BookShelf extends Component{

render(){

  const shelves = ["currentlyReading","wantToRead","read"]
  const shelvesName= ["Currently Reading", "Want To Read","Read"]
  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div>
      {shelves.map((shelf,index) => {
          return(
              <div key={index} className="list-books-content">
                <div>
                <div>
               <div className = "bookshelf">
               <h2 className = "bookshelf-title">shelvesName[index]</h2>
               <div className = "bookshelf-books">
                 <ol className = "books-grid">
                 {this.props.booksOnShelf}.sort(sortBy('title'))
                 .filter(book => book.shelf === shelf).map(book =>(
                   <Book
                   onMoveBook={this.props.onMoveBook}
                   key={book.id}
                   book={book}
                    />
                 )
                 )
              </ol>
               </div>
               </div>
               </div>
              </div>
              </div>
          )

        })
      }



      </div>
    </div>










  )
}




}
export default BookShelf
