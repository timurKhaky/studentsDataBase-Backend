const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const authMiddleware = require("./middlewares/auth.middleware");

const router = Router();

router.post("/signup", authMiddleware, usersController.signUp);
router.post("/signin", usersController.signIn);

module.exports = router;
