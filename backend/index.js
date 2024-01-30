import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js"
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); //Pharsing Request Body
app.use('/books', bookRoutes); //Routes


app.get('/', (request, response) => {
   console.log(request);
   return response.status(200).send(`Welcome to MERN!`);
});

mongoose.connect(mongoDBURL)
.then(() => {
    console.log(`App connected to Database sucessfully!`);
    app.listen(PORT, () => {
        console.log('App is listening to port:' + PORT);
    })
})
.catch((error) => {
    console.log(error);
});