const mongoose = require("mongoose");
const { DB_NAME } = require("../constant");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB created DB_HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB conn failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
