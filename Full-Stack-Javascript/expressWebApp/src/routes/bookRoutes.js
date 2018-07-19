const express = require('express');
const bookRouter = express.Router();

function router(nav) {
  const books = [
    {
      id: 0,
      title: 'War and Peace',
      genre: 'Historical Fiction',
      author: 'Lev Nikolayevich Tolstoy',
      read: false,
    },
    {
      id: 1,
      title: 'Les Misérables',
      genre: 'Historical Fiction',
      author: 'Victor Hugo',
      read: false,
    },
    {
      id: 2,
      title: 'Don Quijote de la Mancha',
      genre: 'Historical Fiction',
      author: 'Miguel de Cervantes',
      read: false,
    }
  ]
  // Book Routers
  bookRouter.route('/').get((req, res) => {
    res.render('bookList', {
      title: 'The Title',
      nav,
      books
    });
  });
  bookRouter.route('/:id').get((req, res) => {
    const id = req.params.id;
    res.render('bookDetail', {
      title: 'The Title',
      nav,
      book: books[id]
    });
  });
  return bookRouter
}



module.exports = router;
