
import React, { Component } from 'react'

class Book extends Component{

  updateBook(shelf) {
    this.props.onMoveBook(this.props.book, shelf)
  }


render(){
const {book} = this.props

  return(
           <div className = "book">
           <div className = "book-top">
           <div className = "book-cover"
           style = {{ height:192, width:128, backgroundImage:`url("' + book.imageLinks.thumbnail + '")`  }}></div>
         <div className = "book-shelf-changer">
         <select value= {book.shelf}  onChange = {(e) =>  this.updateBook(e.target.value)
         } >
          <option value = "" disabled > Move To...</option>
          <option value = "currentlyReading"> currently Reading </option>
          <option value = "wantToRead"> Want To Read </option>
          <option value = "read"> Read </option>
          <option value = "none"> None </option>
         </select>
         </div>
          </div>




           <div className = "book-title"> {this.props.book.title}</div>
            <div className = "book-authors"> {this.props.book.authors}</div>
            </div>

  )
}


}


export default Book
