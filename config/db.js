const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://prasanthk_db_user:oweaKoQOsCJyabaJ@itlu.ekllpzs.mongodb.net/');
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
}

module.exports = { connectDB };
