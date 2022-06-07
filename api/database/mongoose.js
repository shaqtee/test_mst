import mongoose from "mongoose";

class mongoDB {
  async connect() {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("MongoDB Connection has been established.");
    } catch (error) {
      throw error;
    }
  }

  noted() {
    mongoose.connection.on("disconnected", () => {
      console.log("Executing (default): Mongoose on MongoDB disconnected!");
    });
    mongoose.connection.on("connected", () => {
      console.log("Executing (Mongoose): listen MongoDB");
    });
  }
}

export default mongoDB;
