// Add middleware to connect notesRoutes.js
const router = require("express").Router();
const notesRoutes = require("../apiRoutes/noteRoutes");

router.use(notesRoutes);

module.exports = router;