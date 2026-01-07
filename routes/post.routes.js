// routes/post.routes.js
const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const controller = require("../controllers/post.controller");

router.get("/", controller.getPosts);
router.post("/", auth, controller.createPost);
router.put("/:id", auth, controller.updatePost);
router.delete("/:id", auth, controller.deletePost);

module.exports = router;
