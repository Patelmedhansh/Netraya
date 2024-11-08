require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userroutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// MongoDB connection
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => console.log('Server running on port 5000'));
})
.catch((error) => console.log(error));
