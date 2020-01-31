const BookInstance = require('../models/bookinstance');

// Display list of all Book Instances
exports.bookinstance_list = (req, res, next) => {
    BookInstance.find().populate('book').exec((err, list_bookinstances) => {
        if (err) { 
            return next(err); 
        }

        res.render('bookinstance_list',  { 
            title: 'Book Instance List',
            bookinstance_list: list_bookinstances 
        });
    });
};

// Display detail page for a specific Book Instance
exports.bookinstance_detail = (req, res, next) => {
    
    BookInstance.findById(req.params.id)
        .populate('book')
        .exec((err, bookinstance) => {
            if (err) {
                return next(err);
            }

            if (bookinstance == null) {
                const err = new Error('Book copy not found');
                err.status = 404;
                return next(err);
            }
            
            res.render('bookinstance_detail', { title: `Copy: ${bookinstance.book.title}`, bookinstance: bookinstance });
        });
};

// Display BookInstance create form on GET
exports.bookinstance_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Book Instance create GET');
};

// Display BookInstance create on POST
exports.bookinstance_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Book Instance create POST');
};

// Display BookInstance delete form on GET
exports.bookinstance_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Book Instance delete GET');
};

// Display BookInstance delete on POST
exports.bookinstance_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Book Instance delete POST');
};

// Display BookInstance update form on GET
exports.bookinstance_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Book Instance update GET');
};

// Display BookInstance update on POST
exports.bookinstance_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Book Instance update POST');
};