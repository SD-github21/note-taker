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
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, "./db/db.json"),
        JSON.stringify(notesArray, null, 2)
    );

    return note;
}


app.get("/api/notes", (req, res) => {

    res.json(notes);

});

app.post("/api/notes", (req, res) => {
    // Set ID using uuid npm package
    req.body.id = uuidv4();

    // Add note to JSON file and notes array in this function
    const note = createNewNote(req.body, notes);


    res.json(note);

});



app.listen(PORT, () => {
    console.log(`The API server is now on port ${PORT}!`);
});