const express = require("express");
const { SecureNote } = require("../models/models");
const router = express.Router();
const bcrpyt = require("bcrypt");

router.get("/:id", async function (req, res, next) {
  try {
    const secureNote = await SecureNote.findById(req.params.id);
    res.json({
      success: true,
      body: secureNote,
    });
  } catch (error) {}
});

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const secureNotes = await SecureNote.find();
  res.json({
    success: true,
    body: secureNotes,
  });
});

/* POST add user. */
router.post("/", async function (req, res, next) {
  try {
    // req.body.password = await hash_password(req.body.password);
    if (req.body.expiresAt) req.body.expiresAt = new Date(req.body.expiresAt);
    const secureNote = new SecureNote(req.body);
    await secureNote.save();
    res.json({
      success: true,
      body: secureNote,
    });
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const secureNote = await SecureNote.findByIdAndDelete(req.params.id);
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
  const password = await SecureNote.findByIdAndUpdate(req.params.id, {
    $set: {
      ...req.body,
    },
  });
  res.status(200).json({ success: true, body: password });
});

module.exports = router;
