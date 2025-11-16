const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://gkpc:gkpc@itlu.tsnhdhm.mongodb.net/?retryWrites=true&w=majority&appName=itlu');
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
}

module.exports = { connectDB };
