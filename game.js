const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the public folder
app.use(express.static(path.join(__dirname)));

// Render the index.html file
app.get('/pexeso', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const port = process.env.PORT || 22109;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});