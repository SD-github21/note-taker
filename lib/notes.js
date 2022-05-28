const fs = require("fs");
const path = require("path");
const notes = require("../db/db.json");

// Function to create a new note by pushing the new note object into the notes array 
// Rewrite the JSON file containing all notes to add the new note
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notesArray, null, 2)
    );

    return note;
}

// Function to delete a note
// (1) Filter out the selected note to delete by its unique ID number
// (2) Identify the index of the note to delete
// (3) Delete the note from the array using the splice method by the index of the note to delete
// (4) Rewrite the original JSON file of data with the new notes array without the deleted note
function deleteNote(id, notesArray) {
    const deletedNote = notesArray.filter(note => note.id === id)[0];
    index = notesArray.indexOf(deletedNote);
    notes.splice(index, 1);
    fs.writeFileSync(
       path.join(__dirname, "../db/db.json"),
       JSON.stringify(notesArray, null, 2)
   );

    return notesArray;
}

// Export the notes functions
module.exports = {
    createNewNote,
    deleteNote
};