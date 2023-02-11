const Student = require("../models/Student.model");
const User = require("../models/User.model");

module.exports.studentsController = {
  async postStudent(req, res) {
    try {
      const {
        fullname,
        gender,
        students,
        faculty,
        department,
        course,
        group,
        educationForm,
        educationType,
        status,
        changeDate,
      } = req.body;
      const { title, from, to } = status;
      const addedBy = req.user.id;
      const data = await Student.create({
        department,
        fullname,
        gender,
        students,
        faculty,
        course,
        group,
        educationForm,
        educationType,
        status: { title, from, to },
        changeDate,
        addedBy,
      });
      return res.json(data);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  async getAllStudents(req, res) {
    try {
      const data = await Student.find();
      return res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  async getStudentByStatus(req, res) {
    try {
      const { title } = req.params;
      const data = await Student.find({
        status: { title: title },
      });
      return res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
