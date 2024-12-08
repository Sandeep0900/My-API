const express = require('express');
const path = require('path');
const app = express();

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the "images" directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// API route to fetch an image by number
app.get('/api/image/:number', (req, res) => {
    const imageNumber = req.params.number;
    const imagePath = path.join(__dirname, 'images', `image_${imageNumber}.jpg`);

    res.sendFile(imagePath, (err) => {
        if (err) {
            res.status(404).json({ error: `Image with number ${imageNumber} not found.` });
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
