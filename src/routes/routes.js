const router = require('express').Router();

const sequelize = require('../config/db');
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

// POST DOESNT WORKS
router.post('/author', async (req,res) => {
    const author = await Author.create(req.body);
    res.json(author);
});

router.post('/book', async (req,res) => {
    const books = await Book.create( req.body );
    res.json(books);
});

module.exports = router