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
app.use(express.static("public"));

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, "./db/db.json"),
        JSON.stringify(notesArray, null, 2)
    );

    return note;
}

function deleteNote(id, notesArray) {
    const deletedNote = notesArray.filter(note => note.id === id)[0];
    index = notesArray.indexOf(deletedNote);
    notes.splice(index, 1);
    console.log(notesArray);
    fs.writeFileSync(
       path.join(__dirname, "./db/db.json"),
       JSON.stringify(notesArray, null, 2)
   );

    return notesArray;
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


app.delete("/api/notes/:id", (req, res) => {
    const newNotes = deleteNote(req.params.id, notes);

     return res.json(newNotes);

   
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})


app.listen(PORT, () => {
    console.log(`The API server is now on port ${PORT}!`);
});