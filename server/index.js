const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/Users");
const passwordRoutes = require("./routes/Passwords");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/passwords", passwordRoutes);
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(5000, () => console.log("started at port 5000"));
