
const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch'); // Import fetch for making HTTP requests
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/get_data', async (req, res) => {
    try {
        const apiUrl = 'http://localhost:5000/get_data'; // Replace with your Flask server URL
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch data from Flask server');
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
