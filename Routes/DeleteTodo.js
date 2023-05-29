const router = require("express").Router();
const data = require("../Models/Todomodel");
router.delete("/:id", async (req, res) => {
  const tododata = await data.findById(req.params.id);
  await tododata.deleteOne();
  res.json({ message: `Data is deleted succesfully for ${req.params.id}` });
});
module.exports = router;
