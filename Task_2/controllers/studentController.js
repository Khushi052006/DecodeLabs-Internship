const students = require("../data/students.json");

// GET ALL STUDENTS
const getStudents = (req, res) => {
  res.status(200).json(students);
};

// GET STUDENT BY ID
const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find(
    (student) => student.id === id
  );

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student not found"
    });
  }

  res.status(200).json(student);
};

// ADD STUDENT
const addStudent = (req, res) => {
  const { name, course, email } = req.body;

  const newStudent = {
    id: students.length + 1,
    name,
    course,
    email
  };

  students.push(newStudent);

  res.status(201).json({
    success: true,
    message: "Student added successfully",
    data: newStudent
  });
};

// UPDATE STUDENT
const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find(
    (student) => student.id === id
  );

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student not found"
    });
  }

  student.name = req.body.name || student.name;
  student.course = req.body.course || student.course;
  student.email = req.body.email || student.email;

  res.status(200).json({
    success: true,
    message: "Student updated successfully",
    data: student
  });
};

// DELETE STUDENT
const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);

  const index = students.findIndex(
    (student) => student.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Student not found"
    });
  }

  const deletedStudent = students.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "Student deleted successfully",
    data: deletedStudent
  });
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent
};