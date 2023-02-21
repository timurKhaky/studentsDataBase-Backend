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
        course,
        group,
        educationForm,
        educationType,
        changeDate,
        details,
      } = req.body.data;
      const { status, from, to } = req.body.status;

      const worker = await User.findById(req.user.id);

      const data = await Student.create({
        addedBy: req.user.id,
        department: worker.department,
        fullname,
        gender,
        students,
        faculty,
        course,
        group,
        educationForm,
        educationType,
        status,
        relocation: {
          from,
          to,
        },
        details,
        changeDate,
      });

      return res.json(data);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  async getStudentByStatus(req, res) {
    try {
      const { title } = req.params;
      const data = await Student.find({}, null, { sort: { fullname: 1 } });
      if (title === "все") {
        return res.json(data);
      } else {
        const dataByStatus = data.filter(
          (item) =>
            String(item.status).toLowerCase() === String(title).toLowerCase()
        );
        return res.json(dataByStatus);
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  async changeStudentData(req, res) {
    try {
      const data = await Student.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );
      return res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
