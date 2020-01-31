const async = require('async');

const Author = require('../models/author');
const Book = require('../models/book');

// Display list of all Author
exports.author_list = function(req, res) {
    
    Author.find()
        .sort([['family_name', 'ascending']])
        .exec((err, list_authors) => {
            if (err) { return next(err) }

            res.render('author_list', { title: 'Author List', author_list: list_authors });
        });
};

// Display detail page for a specific Author
exports.author_detail = function(req, res, next) {
    
    async.parallel({
        author: callback => {
            Author.findById(req.params.id).exec(callback);
        },
        author_books: callback => {
            Book.find({ 'author': req.params.id }, 'title summary').exec(callback);
        }
    }, 
    (err, results) => {
        if (err) {
            return next(err);
        }

        if (results.author == null) {
            const err = new Error('Author not found');
            err.status = 404;
            next(err);
        }

        res.render('author_detail', { title: 'Author Detail', author: results.author, author_books: results.author_books });
    });
};

// Display Author create form on GET
exports.author_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create form GET');
};

// Handle Author create on POST
exports.author_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create POST');
};

// Display Author delete form on GET
exports.author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete form GET');
};

// Handle Author delete on POST
exports.author_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET
exports.author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update form GET');
};

// Handle Author update on POST
exports.author_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};