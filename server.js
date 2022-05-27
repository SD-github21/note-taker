const fs = require("fs");
const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
const notes = require("./db/db.json");


// Add middleware to read posted/incoming data
// Parse incoming string or array data
app.use(express.urlencoded({ extended: false }));
// Parse incoming JSON data
app.use(express.json());


app.get("/api/notes", (req, res) => {

    res.json(notes);

});

app.post("/api/notes", (req, res) => {

    console.log(req.body);
    res.json(req.body);

});



app.listen(PORT, () => {
    console.log(`The API server is now on port ${PORT}!`);
});