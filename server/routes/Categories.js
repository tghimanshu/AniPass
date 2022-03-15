const express = require("express");
const { Category } = require("../models/models");
const router = express.Router();

router.get("/:id", async function (req, res, next) {
  try {
    const category = await Category.findById(req.params.id);
    res.json({
      success: true,
      body: category,
    });
  } catch (error) {}
});

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const categories = await Category.find();
  res.json({
    success: true,
    body: categories,
  });
});

/* POST add user. */
router.post("/", async function (req, res, next) {
  try {
    // req.body.password = await hash_password(req.body.password);
    const category = new Category(req.body);
    await category.save();
    res.json({
      success: true,
      body: category,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    res.json({
      success: false,
      body: category,
    });
  } catch (error) {}
});

router.put("/:id", async (req, res) => {
  const category = await Category.findByIdAndUpdate(req.params.id, {
    $set: {
      ...req.body,
    },
  });
  res.status(200).json({ success: true, body: category });
});

module.exports = router;
