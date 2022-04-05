const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/Users");
const teamRoutes = require("./routes/teamRoutes");
const passwordRoutes = require("./routes/Passwords");
const secureNoteRoutes = require("./routes/SecureNotes");
const categoriesRoutes = require("./routes/Categories");
const { SecureNote } = require("./models/models");
const bcrpyt = require("bcrypt");
const app = express();

app.use(cors());
app.use(express.json());
app.use(
  "/u/:userId/passwords",
  (req, res, next) => {
    req.userId = req.params.userId;
    next();
  },
  passwordRoutes
);
app.use(
  "/u/:userId/secureNotes",
  (req, res, next) => {
    req.userId = req.params.userId;
    next();
  },
  secureNoteRoutes
);
app.use(
  "/u/:userId/team",
  (req, res, next) => {
    req.userId = req.params.userId;
    next();
  },
  teamRoutes
);
app.use("/users", userRoutes);
app.use("/categories", categoriesRoutes);
app.get("/secureNotes/:id", async (req, res) => {
  try {
    const secureNote = await SecureNote.findById(req.userId);
    if (!secureNote)
      res.status(404).json({
        success: false,
        body: "Not Found",
      });
    const isThere = await bcrpyt.compare(
      req.body.password,
      secureNote.password
    );
    if (isThere) {
      res.json({
        success: true,
        body: secureNote,
      });
    } else {
      res.status(501).json({
        success: false,
        body: "Invalid Password",
      });
    }
  } catch (error) {}
});
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(5000, () => console.log("started at port 5000"));
