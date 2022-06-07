import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
/* Routes */
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import mailRoute from "./routes/mail.js";
import uploadRoute from "./routes/upload.js";
import mysqlRoute from "./routes/mysqlroute.js";
/* DB_APP */
import mongoDB from "./database/mongoose.js";
import MySQL from "./database/mysql.js";

dotenv.config();
const app = express();
const mysql = new MySQL();
const mongo = new mongoDB();
const port = process.env.APP_PORT;

app.use(cookieParser());
app.use(express.json());
app.use(express.static("public")); // for images

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/mail", mailRoute);
app.use("/api/file", uploadRoute);
app.use("/api/sql", mysqlRoute);

//Middleware Extension
app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

app.listen(port, () => {
  mongo.connect();
  mongo.noted();
  mysql.noted();
  console.log(`listening port:${port}`);
});
