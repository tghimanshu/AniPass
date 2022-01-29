const express = require("express");
const { User, hash_password } = require("../models/models");
const router = express.Router();
const bcrpyt = require("bcrypt");

router.post("/login", async function (req, res, next) {
  try {
    // const user = await User.findOne({ email: req.body.email });
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (!user) return res.status(404).json({ success: false, body: error });
    const isThere = await bcrpyt.compare(req.body.password, user.password);
    if (isThere) {
      res.json({
        success: true,
        body: user,
      });
    } else {
      res.status(501).json({
        success: false,
        body: "Username or Password is incorrect",
      });
    }
  } catch (error) {
    console.log(error);
    res.send("Didn't Find");
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    res.json({
      success: true,
      body: user,
    });
  } catch (error) {}
});

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const users = await User.find();
  res.json({
    success: true,
    body: users,
  });
});

/* POST add user. */
router.post("/", async function (req, res, next) {
  try {
    req.body.password = await hash_password(req.body.password);
    const user = new User(req.body);
    await user.save();
    res.json({
      success: true,
      body: user,
    });
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json({
      success: false,
      body: user,
    });
  } catch (error) {}
});

router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, {
    $set: {
      name: req.body.name,
    },
  });
  res.status(200).json({ success: true, body: user });
});

module.exports = router;
