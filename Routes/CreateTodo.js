const router = require("express").Router();
const todoSchema = require("../Models/Todomodel");
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name) {
    res.status(500).json({ message: "Name is required" });
  }
  if (!email) {
    res.status(500).json({ message: "email is required" });
  }
  if (!message) {
    res.status(500).json({ message: "message is required" });
  }
  await todoSchema.create({
    name,
    email,
    message,
  });
  res.status(200).json({
    message: "Information saved successfully",
  });
});
module.exports = router;
