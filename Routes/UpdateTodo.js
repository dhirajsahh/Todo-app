const router = require("express").Router();
const data = require("../Models/Todomodel");
router.put("/:id", async (req, res) => {
  const tododata = await data.findById(req.params.id);
  await data.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(`data is updated succesfully`);
});
module.exports = router;
