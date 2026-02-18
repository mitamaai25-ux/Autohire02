const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const aiController = require("../controllers/aiController");

router.get("/match", auth, aiController.matchJobs);
router.post("/chat", aiController.chatbot);

module.exports = router;
