const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  try {
    const mongoURI = process.env.MONGODB_URI || "mongodb+srv://prasanthk_db_user:oweaKoQOsCJyabaJ@itlu.ekllpzs.mongodb.net/";
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
}

module.exports = { connectDB };
