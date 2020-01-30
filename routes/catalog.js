const express = require('express');
const router = express.Router();

// Require controller modules
const book_controller = require('../controllers/bookController');
const author_controller = require('../controllers/authorController');
const genre_controller = require('../controllers/genreController');
const book_instance_controller = require('../controllers/bookInstanceController');

//Book Routes

// GET catalog home page
router.get('/', book_controller.index);

// GET request for creating a Book. Note: This must come before routes that display Book (uses id)
router.get('/book/create', book_controller.book_create_get);

// POST request for creating a Book
router.post('/book/create', book_controller.book_create_post);

// GET request to delete Book
router.get('/book/:id/delete', book_controller.book_delete_get);

// POST request to delete Book
router.post('/book/:id/delete', book_controller.book_delete_post);

// GET request to update Book
router.get('/book/:id/update', book_controller.book_update_get);

// POST request to update Book
router.post('/book/:id/update', book_controller.book_update_post);

// GET request for one Book
router.get('/book/:id', book_controller.book_detail);

// GET request for list of all Books
router.get('/books', book_controller.book_list);

//author Routes

// GET request for creating a author. Note: This must come before route for id (i.e display author)
router.get('/author/create', author_controller.author_create_get);

// POST request for creating a author
router.post('/author/create', author_controller.author_create_post);

// GET request to delete author
router.get('/author/:id/delete', author_controller.author_delete_get);

// POST request to delete author
router.post('/author/:id/delete', author_controller.author_delete_post);

// GET request to update author
router.get('/author/:id/update', author_controller.author_update_get);

// POST request to update author
router.post('/author/:id/update', author_controller.author_update_post);

// GET request for one author
router.get('/author/:id', author_controller.author_detail);

// GET request for list of all authors
router.get('/authors', author_controller.author_list);

//genre Routes

// GET request for creating a genre. Note: This must come before route  that displays Genre (uses id)
router.get('/genre/create', genre_controller.genre_create_get);

// POST request for creating a genre
router.post('/genre/create', genre_controller.genre_create_post);

// GET request to delete genre
router.get('/genre/:id/delete', genre_controller.genre_delete_get);

// POST request to delete genre
router.post('/genre/:id/delete', genre_controller.genre_delete_post);

// GET request to update genre
router.get('/genre/:id/update', genre_controller.genre_update_get);

// POST request to update genre
router.post('/genre/:id/update', genre_controller.genre_update_post);

// GET request for one genre
router.get('/genre/:id', genre_controller.genre_detail);

// GET request for list of all genres
router.get('/genres', genre_controller.genre_list);

//BookInstance Routes

// GET request for creating a BookInstance. Note: This must come before route  that displays BookInstance (uses id)
router.get('/bookinstance/create', book_instance_controller.bookinstance_create_get);

// POST request for creating a genre
router.post('/bookinstance/create', book_instance_controller.bookinstance_create_post);

// GET request to delete bookinstance
router.get('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_get);

// POST request to delete bookinstance
router.post('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_post);

// GET request to update bookinstance
router.get('/bookinstance/:id/update', book_instance_controller.bookinstance_update_get);

// POST request to update bookinstance
router.post('/bookinstance/:id/update', book_instance_controller.bookinstance_update_post);

// GET request for one bookinstance
router.get('/bookinstance/:id', book_instance_controller.bookinstance_detail);

// GET request for list of all bookinstances
router.get('/bookinstances', book_instance_controller.bookinstance_list);

module.exports = router;