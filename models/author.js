const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
    {
        firstName: { type: String, required: true, maxlength: 100 },
        familyName: { type: String, required: true, maxlength: 100 },
        date_of_birth: Date,
        date_of_death: Date,

    }
);

// Virtual type fo author's full name
AuthorSchema.virtual('name').get(() => {
    return `${this.familyName}, ${this.firstName}`;
});

// Virtual type for author's lifespan
AuthorSchema.virtual('lifespan').get(() => {
    return (this.date_of_death.getYear() - this.date_of_birth.getYear());
});

// Virtual type for author's URL
AuthorSchema.virtual('url').get(() => {
    return `/catalog/author/${this._id}`;
});

// Exports Module
module.exports = mongoose.model('Author', AuthorSchema);