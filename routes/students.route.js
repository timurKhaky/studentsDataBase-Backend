const { Router } = require("express");

const { studentsController } = require("../controllers/students.controller");
const authMiddleware = require("./middlewares/auth.middleware");

const router = Router();

router.post("/", authMiddleware, studentsController.postStudent);
router.get("/", authMiddleware, studentsController.getAllStudents);
router.get(
  "/status/:title",
  authMiddleware,
  studentsController.getStudentByStatus
);

module.exports = router;
