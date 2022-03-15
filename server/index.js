const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/Users");
const passwordRoutes = require("./routes/Passwords");
const secureNoteRoutes = require("./routes/SecureNotes");
const categoriesRoutes = require("./routes/Categories");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/passwords", passwordRoutes);
app.use("/secureNotes", secureNoteRoutes);
app.use("/categories", categoriesRoutes);
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(5000, () => console.log("started at port 5000"));
