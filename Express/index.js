// Import required modules
const fs = require('fs');
const express = require("express");
const app = express();

// Define the port for the server
const PORT = 8800;

// Middleware to log page visits to 'log.txt'
app.use((req, res, next) => {
    // Generate a log entry with timestamp, HTTP method, requested URL, and response message
    const logData = `${new Date().toISOString()} - ${req.method} ${req.url} : ${res.statusCode} :: New Request completed\n`;
    
    // Append the log entry to 'log.txt' file
    fs.appendFile('log.txt', logData, (err) => {
        if (err) {
            // Log an error message if writing to the file fails
            console.error('Error writing to log file:', err);
        }
    });

    // Pass control to the next middleware or route handler
    next();
});

// Define a route for the root path
app.get('/', (req, res) => {
    // Send a response for the root path
    res.send('Hello Sanobar Bacha');
});

// Define a route for the '/bacha' path
app.get('/bacha', (req, res) => {
    // Send a response for the '/bacha' path
    res.send('Hello Bacha - Kaisi ho Sabar');
});

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
