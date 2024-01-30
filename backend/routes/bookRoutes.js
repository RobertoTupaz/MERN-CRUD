import express from "express";
import { Book } from "../model/BookModel.js";

const router = express.Router();


router.post('/', async (request, response) => {
    try {
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'send all required fields: title, author, publishYear'
            });
        }

        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        }

        const book = await Book.create(newBook);

        return response.status(200).send(book);

    } catch(error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.get('/', async (request, response) => {
    try{
        const allBooks = await Book.find({});

        return response.status(200).json({
            count: allBooks.length,
            data: allBooks
        });
    } catch(error) {
        console.log(error.message)
        return response.status(500).send({message: error.message})
    }
});

router.get('/:id', async (request, response) => {
    try{
        const { id } = request.params;

        const book = await Book.findById(id);

        return response.status(200).json(book);
    } catch(error) {
        console.log(error.message)
        return response.status(500).send({message: error.message})
    }
});

router.put('/:id', async (request, response) => {
    try{
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400)
            .send({message: "Please send all the required fields: title, author, publishDate"});
        }

        const { id } = request.params;

        const result = await Book.findByIdAndUpdate(id, request.body);

        if(!result) {
            return response.status(404).send({message: "Not Found"});
        }

        return response.status(200).send({message: "Book Updated Successfully"})
    } catch(error) {
        console.log(error.message)
        return response.status(500).send({message: error.message})
    }
});

router.delete('/:id', async (request, response) => {
    try{
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result) {
            return response.status(404).send({message: "Book not found"});
        }

        return response.status(200).send({message: "Data Deleted Successfully"})
    } catch (error) {
        console.log(error.message);
        return response.status(404).send({message: "Book Not Found"});
    }
});

export default router;