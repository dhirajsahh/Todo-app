const router = require("express").Router();
const data = require("../Models/Todomodel");
router.get("/:id", async (req, res) => {
  const tododata = await data.findById(req.params.id);
  res.json(tododata);
});
module.exports = router;
