const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Fallback route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Movie Booking Server running at http://localhost:${PORT}`);
});