const express = require("express");
const { SecureNote, User } = require("../models/models");
const router = express.Router();
const bcrpyt = require("bcrypt");

router.get("/:id", async function (req, res, next) {
  try {
    const secureNote = await SecureNote.findById(req.userId);
    res.json({
      success: true,
      body: secureNote,
    });
  } catch (error) {}
});

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const secureNote = await SecureNote.find({ user: req.userId });
  res.json({
    success: true,
    body: secureNote,
  });
});

/* POST add user. */
router.post("/", async function (req, res, next) {
  try {
    // req.body.password = await hash_password(req.body.password);
    if (req.body.expiresAt) req.body.expiresAt = new Date(req.body.expiresAt);
    const secureNote = new SecureNote({
      ...req.body,
      user: req.userId,
    });
    const sId = await secureNote.save();

    const user = await User.findById(req.userId);
    user.secureNotes.push(sId._id);
    await user.save();

    res.json({
      success: true,
      body: secureNote,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const secureNote = await SecureNote.findByIdAndDelete(req.params.id);

    const user = await User.findById(req.userId);
    user.secureNotes.filter((p) => p !== req.params.id);
    await user.save();

    res.json({
      success: true,
      body: secureNote,
    });
  } catch (error) {}
});

router.put("/:id", async (req, res) => {
  if (req.body.expiresAt) {
    req.body.expiresAt = new Date(req.body.expiresAt);
  }
  const secureNote = await SecureNote.findByIdAndUpdate(req.params.id, {
    $set: {
      ...req.body,
    },
  });
  res.status(200).json({ success: true, body: secureNote });
});

module.exports = router;
