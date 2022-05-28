// Import all necessary packages/modules/dependencies
const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
})


// Export single instance router to be accessible across all files within all folders
module.exports = router;