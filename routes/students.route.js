const { Router } = require("express");

const { studentsController } = require("../controllers/students.controller");
const authMiddleware = require("./middlewares/auth.middleware");

const router = Router();

router.post("/", authMiddleware, studentsController.postStudent);
router.get("/", studentsController.getAllStudents);
router.get("/status/:title", studentsController.getStudentByStatus);

module.exports = router;
