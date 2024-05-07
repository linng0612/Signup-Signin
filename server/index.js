const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoute');

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//route
app.use('/api/auth', authRouter);



//mongodb connection
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://linhnguyen61299:7Ol7Muhy7YA9yhx8@cluster0.vunvqh9.mongodb.net/Authentication?retryWrites=true&w=majority&appName=Cluster0')
        console.log(`MongoDB connected`);
    } catch (err) {
        console.log(error.message);
    }
}

connectDB();
//global error handler
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});
//server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});