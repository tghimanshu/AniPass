const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose
  .connect("mongodb://localhost/AniPass")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err.message));

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const passwordSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
    default: [{ title: "Uncategorized", color: "dark" }],
  },
});

const secureNotesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    default: null,
  },
  note: {
    type: String,
  },
});

secureNotesSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const User = mongoose.model("User", userSchema);
const Password = mongoose.model("Password", passwordSchema);
const SecureNote = mongoose.model("SecureNote", secureNotesSchema);

async function hash_password(pass) {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(pass, salt);
  return hashed;
}

module.exports = {
  User,
  Password,
  SecureNote,
  hash_password,
};
