const validateStudent = (req, res, next) => {
  const { name, course, email } = req.body;

  if (!name || !course || !email) {
    return res.status(400).json({
      success: false,
      message: "Name, Course and Email are required"
    });
  }

  next();
};

module.exports = validateStudent;