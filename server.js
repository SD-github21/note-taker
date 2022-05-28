const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// Add middleware to read posted/incoming data
// Parse incoming string or array data
app.use(express.urlencoded({ extended: false }));
// Parse incoming JSON data
app.use(express.json());

app.use(express.static("public"));
// Use routers from other files
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`The API server is now on port ${PORT}!`);
});