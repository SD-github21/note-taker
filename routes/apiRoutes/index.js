// Add middleware to connect notesRoutes.js
const router = require("express").Router();
const notesRoutes = require("../apiRoutes/noteRoutes");

router.use(notesRoutes);

// Export single instance router to be accessible across all files within all folders
module.exports = router;