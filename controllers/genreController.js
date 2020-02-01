const async = require('async');
const validator = require('express-validator');

const Genre = require('../models/genre');
const Book = require('../models/book');

// Display list of all Genre.
exports.genre_list = (req, res, next) => {
    Genre.find().exec((err, list_genres) => {
        if (err) {
            return next(err);
        }

        res.render('genre_list', { title: 'Genre List', genre_list: list_genres });
    });
};

// Display detail page for a specific Genre
exports.genre_detail = (req, res, next) => {
    
    async.parallel({
        genre: callback => {
            Genre.findById(req.params.id).exec(callback);
        },  
        genre_books: callback => {
            Book.find({ 'genre': req.params.id }).exec(callback);
        }
    }, 
    (err, results) => {
        if (err) {
            return next(err);
        }

        if (results.genre == null) {
            const err = new Error('Genre not found');
            err.status = 404;
            return next(err);
        }

        res.render('genre_detail', {title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books});
    })
};

// Display Genre create form on GET
exports.genre_create_get = (req, res) => {
    res.render('genre_form', { title: 'Create Genre' });
};

// Display Genre create on POST
exports.genre_create_post = [

    // Validate that the name field is not empty
    validator.body('name', 'Genre name required').isLength({ min: 1 }).trim(),

    // Sanitize (escape) the name field
    validator.sanitizeBody('name').escape(),

    // Process request after validation and sanitization
    (req, res, next) => {

        // Extract the validation errors from a request
        const errors = validator.validationResult(req);

        // Create a genre object with escaped and trimmed data
        const genre = new Genre({
            name: req.body.name
        });

        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages
            res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors.array() });
            return;
        }
        else {
            // Data form is valid
            // Check if Genre with same name already exists
            Genre.findOne({ 'name': req.body.name }).exec((err, found_genre) => {
                if (err) {
                    return next(err);
                }

                if (found_genre) {
                    // Genre exists, redirect to its detail page
                    res.redirect(found_genre.url);
                }
                else {
                    genre.save(err => {
                        if (err) {
                            return next(err);
                        }
                        // Genre saved, redirect to genre detail page
                        res.redirect(genre.url);
                    });
                }
            });
        }
    }
];

// Display Genre delete form on GET
exports.genre_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Display Genre delete on POST
exports.genre_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET
exports.genre_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

// Display Genre update on POST
exports.genre_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Genre update POST');
};