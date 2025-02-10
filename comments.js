// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comment
app.post('/comments', (req, res) => {
  res.send('Creating a comment');
});

// Read a comment
app.get('/comments/:commentId', (req, res) => {
  res.send('Reading a comment');
});

// Update a comment
app.put('/comments/:commentId', (req, res) => {
  res.send('Updating a comment');
});

// Delete a comment
app.delete('/comments/:commentId', (req, res) => {
  res.send('Deleting a comment');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});