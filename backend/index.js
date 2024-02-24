import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import { EnvironmentalsRouter } from "./routes/environmentalsRouter.js";
import { LocationsRouter } from "./routes/locationsRouter.js";
import { RecycleOtpRouter } from "./routes/recycleOtpRouter.js";
import { RecyclesRouter } from "./routes/recyclesRouter.js";
import { UsersRouter } from "./routes/usersRouter.js";

///////////////////////////////////////////////// app set-up //////////////////////////////////////////////////
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
// Routes
app.use("/environmentals", EnvironmentalsRouter);
app.use("/locations", LocationsRouter);
app.use("/otp", RecycleOtpRouter);
app.use("/recycles", RecyclesRouter);
app.use("/users", UsersRouter);

///////////////////////////////////////////////// cors set-up //////////////////////////////////////////////////
var corsOptions = {
  origin: "https://environmentals.vercel.app",
  credentials: true,
  optionsSuccessStatus: 200,
  headers: {
    "Access-Control-Allow-Origin": "https://environmentals.vercel.app", // Allow CORS from any origin
    "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE, OPTIONS", // Allow all HTTP methods
    "Access-Control-Allow-Headers": "*", // Allow specified headers
  },
};

//////////////////////////////////////////////////  mongoDB ///////////////////////////////////////////////////
const mongoURLString = process.env.DATABASE_URL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURLString);
    console.log(`MongoDB Atlas Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

//Connect to the database before listening
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

export default app;
