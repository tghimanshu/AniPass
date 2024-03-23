const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose
  .connect("mongodb://localhost/AniPass")
  // .connect( "mongodb://anipass:gE77Lc3ummkqFBcTW1ilkwItnem8BKyjsb7gMN6meOUOCsdN1v16JC140DJnbXgA1GHepZKO8K1ajhtrIFr23g==@anipass.mongo.cosmos.azure.com:10255/anipass?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@anipass@"
  // )
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
  passwords: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Password",
    },
  ],
  secureNotes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SecureNote",
    },
  ],
  teamInvite: [
    {
      teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
      },
      accepted: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

const categorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  color: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const passwordSchema = new mongoose.Schema(
  {
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
    categories: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Category",
      },
    ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    team: { type: mongoose.Schema.Types.ObjectId, ref: "Team", default: null },
  },
  { timestamps: true }
);

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
  password: {
    type: String,
    required: true,
  },
  totalViews: {
    type: Number,
    default: -1,
  },
  views: {
    type: Number,
    default: 0,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  team: { type: mongoose.Schema.Types.ObjectId, ref: "Team", default: null },
});

const teamSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  members: [
    {
      userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
      accepted: {
        type: Boolean,
        default: false,
      },
    },
  ],
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  passwords: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Password",
    },
  ],
  secureNotes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SecureNote",
    },
  ],
});

secureNotesSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const User = mongoose.model("User", userSchema);
const Category = mongoose.model("Category", categorySchema);
const Password = mongoose.model("Password", passwordSchema);
const SecureNote = mongoose.model("SecureNote", secureNotesSchema);
const Team = mongoose.model("Team", teamSchema);

async function hash_password(pass) {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(pass, salt);
  return hashed;
}

module.exports = {
  User,
  Team,
  Password,
  SecureNote,
  Category,
  hash_password,
};
