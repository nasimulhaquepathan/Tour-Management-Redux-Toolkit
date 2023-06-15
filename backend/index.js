import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import auth from "./routes/auth.js";
import bookingRoute from "./routes/bookings.js";
import reviewRoute from "./routes/reviews.js";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/user.js";
import goalRoute from "./routes/goal.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

const corsOptions = {
  credentials: true,
  origin: true,
};

// const whitelist = ['http://localhost:3000', 'http://localhost:4000',];

// const corsOptions = {
//   credentials: true,
//   origin: function (origin, callback) {
//     console.log('Incoming Origin:', origin);
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       console.log('Origin allowed:', origin);
//       callback(null, true);
//     } else {
//       console.log('Origin not allowed:', origin);
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };

// middleware

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// routing
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// additional routes
app.use("/auth", auth);
app.use("/tours", tourRoute);
app.use("/users", userRoute);
app.use('/goals', goalRoute)
app.use("/review", reviewRoute);
app.use("/booking", bookingRoute);

// database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MongoDb_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database connected");
  } catch (error) {
    console.log(error);
  }
};

app.listen(port, () => {
  connect();
  console.log(`Server listening on port ${port}`);
});
