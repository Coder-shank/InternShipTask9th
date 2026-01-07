// routes/comment.routes.js
const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const controller = require("../controllers/comment.controller");

router.get("/:postId", controller.getComments);
router.post("/:postId", auth, controller.addComment);
router.delete("/delete/:id", auth, controller.deleteComment);

module.exports = router;
