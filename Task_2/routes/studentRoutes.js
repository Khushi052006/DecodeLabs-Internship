const express = require("express");

const router = express.Router();

const {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent
} = require("../controllers/studentController");

const validateStudent = require("../middleware/validateStudent");

// GET ALL
router.get("/students", getStudents);

// GET BY ID
router.get("/students/:id", getStudentById);

// CREATE
router.post(
  "/students",
  validateStudent,
  addStudent
);

// UPDATE
router.put(
  "/students/:id",
  validateStudent,
  updateStudent
);

// DELETE
router.delete(
  "/students/:id",
  deleteStudent
);

module.exports = router;