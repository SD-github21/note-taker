const fs = require("fs");
const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
const notes = require("./db/db.json");
const { v4: uuidv4 } = require('uuid');

// Add middleware to read posted/incoming data
// Parse incoming string or array data
app.use(express.urlencoded({ extended: false }));
// Parse incoming JSON data
app.use(express.json());

function createNewNote(body, notesArray) {
    console.log(body);

    return(body);
}


app.get("/api/notes", (req, res) => {

    res.json(notes);

});

app.post("/api/notes", (req, res) => {
    // Set ID using uuid npm package
    req.body.id = uuidv4();


    res.json(req.body);

});



app.listen(PORT, () => {
    console.log(`The API server is now on port ${PORT}!`);
});