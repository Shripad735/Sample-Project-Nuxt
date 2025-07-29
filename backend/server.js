require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(cors({
    origin: process.env.FRONTEND_URL,
}));
app.use(express.json());

app.use('/api/todos', require('./routes/todos'));
app.use('/api/weather', require('./routes/weather'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
