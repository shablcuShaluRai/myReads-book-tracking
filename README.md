# App Functionality

In this application,
the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read


![screenshot from 2017-09-25 13 53 39](https://user-images.githubusercontent.com/16433381/30804251-a47ccde0-a227-11e7-9792-33512a771769.png)
![screenshot from 2017-09-25 13 53 47](https://user-images.githubusercontent.com/16433381/30804258-ad00c48a-a227-11e7-8034-c66c1b1c9bd5.png)
![screenshot from 2017-09-25 13 53 57](https://user-images.githubusercontent.com/16433381/30804265-b5412d1a-a227-11e7-843f-6ccd9ed0fbcb.png)


#### The main page also has a link to /search, a search page that allows you to find books to add to your library.

* The search page has a text input that used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

*  The search page also has a link to / (the root URL), which leads back to the main page.


 ![screenshot from 2017-09-25 14 19 22](https://user-images.githubusercontent.com/16433381/30801931-e50416b4-a21f-11e7-91c6-8fa28adeef5f.png)


#### When a book is on a bookshelf, it should have the same state on both the main application page and the search page.


![screenshot from 2017-09-25 14 19 36](https://user-images.githubusercontent.com/16433381/30802603-12617d02-a222-11e7-8ccf-a15b2fac462c.png)


#### When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.


![screenshot from 2017-09-25 14 19 36](https://user-images.githubusercontent.com/16433381/30802310-044ae934-a221-11e7-884d-434eeae096a2.png)
