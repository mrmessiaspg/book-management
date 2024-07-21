const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const Book = require('./models/Book');

const app = express();
const port = process.env.PORT || 3001; // Alterado para 3001

// Conectar ao MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para criar um livro (CREATE)
app.post('/books', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Rota para listar todos os livros (READ)
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Rota para atualizar um livro (UPDATE)
app.put('/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      Object.assign(book, req.body);
      await book.save();
      res.status(200).json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Rota para deletar um livro (DELETE)
app.delete('/books/:id', async (req, res) => {
  try {
    const result = await Book.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }
    // Envia uma mensagem de sucesso além do status 204
    res.status(200).json({ message: 'Book successfully deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});