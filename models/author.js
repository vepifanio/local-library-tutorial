const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
    {
        first_name: { type: String, required: true, maxlength: 100 },
        family_name: { type: String, required: true, maxlength: 100 },
        date_of_birth: Date,
        date_of_death: Date,

    }
);

// Virtual type fo author's full name
AuthorSchema.virtual('name').get(function () {
    return `${this.family_name}, ${this.first_name}`;
});

// Virtual type for author's lifespan
AuthorSchema.virtual('lifespan').get(function () {
    return (this.date_of_death.getYear() - this.date_of_birth.getYear());
});

// Virtual type for author's URL
AuthorSchema.virtual('url').get(function () {
    return `/catalog/author/${this._id}`;
});

// Exports Module
module.exports = mongoose.model('Author', AuthorSchema);