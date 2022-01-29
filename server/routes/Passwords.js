const express = require("express");
const { Password } = require("../models/models");
const router = express.Router();
const bcrpyt = require("bcrypt");

router.get("/:id", async function (req, res, next) {
  try {
    const password = await Password.findById(req.params.id);
    res.json({
      success: true,
      body: password,
    });
  } catch (error) {}
});

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const passwords = await Password.find();
  res.json({
    success: true,
    body: passwords,
  });
});

/* POST add user. */
router.post("/", async function (req, res, next) {
  try {
    // req.body.password = await hash_password(req.body.password);
    console.log("done");
    const password = new Password({
      ...req.body,
      image_url:
        "https://s2.googleusercontent.com/s2/favicons?domain=" +
        new URL(req.body.url).host,
    });
    await password.save();
    res.json({
      success: true,
      body: password,
    });
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const password = await Password.findByIdAndDelete(req.params.id);
    res.json({
      success: false,
      body: password,
    });
  } catch (error) {}
});

router.put("/:id", async (req, res) => {
  const password = await Password.findByIdAndUpdate(req.params.id, {
    $set: {
      ...req.body,
    },
  });
  res.status(200).json({ success: true, body: password });
});

module.exports = router;