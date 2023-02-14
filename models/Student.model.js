const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    addedBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Student",
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    gender: { type: String, required: true },
    department: {
      type: String,
      required: true,
    },
    faculty: {
      type: String,
      required: true,
    },
    course: {
      type: Number,
      required: true,
    },
    group: {
      type: Number,
      required: true,
    },
    educationForm: {
      type: String,
      required: true,
    },
    educationType: {
      type: String,
      required: true,
    },
    status: {
      title: { type: String, required: true },
      from: { type: String, default: null },
      to: { type: String, default: null },
    },
    changeDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
