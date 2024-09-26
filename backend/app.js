const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');
const db = require('./config/db');

// Middleware
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);

// Connect to the Database and start the server
db.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(err => {
    console.error('Error connecting to the database', err);
});

module.exports = app;

