// Import all necessary files and packages/modules/dependencies
const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const { createNewNote, deleteNote } = require("../../lib/notes");
const notes = require("../../db/db.json");

// All API notes routes

// GET request route
router.get("/notes", (req, res) => {

    res.json(notes);

});


// POST request to create a new note 
router.post("/notes", (req, res) => {
    // Set ID using uuid npm package
    req.body.id = uuidv4();

    // Add note to JSON file and notes array in this function
    const note = createNewNote(req.body, notes);

    res.json(note);

});


// DELETE request to delete a note 
router.delete("/notes/:id", (req, res) => {
    const newNotes = deleteNote(req.params.id, notes);

     return res.json(newNotes);
   
});

// Export single instance router to be accessible across all files within all folders
module.exports = router;