const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  publisher: String
}, { versionKey: false });  // Desativa o campo `__v`

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;