const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const calculateRoute = require('./routes/calculate');

dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/', userRoutes);
app.use('/', calculateRoute);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("connected to DB");
    
  });
}).catch(err => {
  console.error(`Error connecting to MongoDB: ${err.message}`);
});
