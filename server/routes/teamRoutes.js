const express = require("express");
const { User, Team, hash_password } = require("../models/models");
const router = express.Router();
const bcrpyt = require("bcrypt");

router.get("/:id", async function (req, res, next) {
  try {
    const user = await Team.findById(req.params.id);
    res.json({
      success: true,
      body: user,
    });
  } catch (error) {}
});

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const users = await Team.find();
  res.json({
    success: true,
    body: users,
  });
});

/* POST add user. */
router.post("/", async function (req, res, next) {
  try {
    const user = new Team({
      ...req.body,
      createdBy: req.userId,
      members: {
        userId: req.userId,
        accepted: true,
      },
    });
    const teamId = await user.save();
    const team = User.findById(req.userId);
    team.teamInvite.push({
      teamId: teamId._id,
      accepted: true,
    });
    await team.save();
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
    const user = await Team.findByIdAndDelete(req.params.id);
    res.json({
      success: false,
      body: user,
    });
  } catch (error) {}
});

router.put("/:id", async (req, res) => {
  const user = await Team.findByIdAndUpdate(req.params.id, {
    $set: {
      name: req.body.name,
    },
  });
  res.status(200).json({ success: true, body: user });
});

module.exports = router;
