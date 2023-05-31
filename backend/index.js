import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import auth from './routes/auth.js';
import bookingRoute from './routes/bookings.js';
import reviewRoute from './routes/reviews.js';
import tourRoute from './routes/tours.js';
import userRoute from './routes/user.js';

dotenv.config()
const app = express()
const port = process.env.PORT 

const whitelist = ['http://localhost:3000', 'http://localhost:4000']
const corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

//  middlewere 
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

// routing

app.get('/', (req, res) => {
  res.send('Hello World!');
});
// additional route 
app.use('/auth', auth)
app.use('/tours', tourRoute)
app.use('/users', userRoute)
app.use('/review', reviewRoute)
app.use('/booking', bookingRoute)


// database connections 
mongoose.set('strictQuery', false)
const connect = async() =>{
     try {
    await mongoose.connect(process.env.MongoDb_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("MongoDB database connectd");
} catch (error) {
    console.log(error)
    }
}

app.listen(port, () => {
  connect();
  console.log('Server listening on port 4000');
});
