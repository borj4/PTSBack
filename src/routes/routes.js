const router = require('express').Router();

// IMPORT MODELS
// const { Author } = require('../models/author');
const { Book, Author } = require('../index');


router.get('/', async (req,res) => {
    // res.send('Entra de fruta madre. Funsiona')
    const books = await Book.findAll();
    res.json(books);
})

module.exports = router