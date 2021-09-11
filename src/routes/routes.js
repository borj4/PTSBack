const router = require('express').Router();

// IMPORT MODELS
const { Book, Author } = require('../index');


router.get('/books', async (req,res) => {
    const books = await Book.findAll();
    res.json(books);
});

router.get('/authors', async (req,res) => {
    const books = await Author.findAll();
    res.json(books);
});

router.get('/author/:authorId', async (req,res) => {
    const authors = await Author.findOne({
        where: { uuid: req.params.authorId}
    });
    res.json(authors);
});

router.get('/author/:bookId', async (req,res) => {
    const books = await Book.findOne({
        where: { id: req.params.bookId}
    });
    res.json(books);
});

router.post('/author', async (req,res) => {
    const author = await Author.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name
    });
    res.json(author);
});

router.post('book', async (req,res) => {
    const books = await Book.create({
        name: req.body.name,
        isbn: req.body.isbn
    });
    res.json(books);
});

module.exports = router