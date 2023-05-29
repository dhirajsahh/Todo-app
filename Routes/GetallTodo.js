const router = require("express").Router();
const data = require("../Models/Todomodel");
router.get("/", async (req, res) => {
  const tododata = await data.find();
  res.json(tododata);
});
module.exports = router;
