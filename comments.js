// Create web server with Express
const express = require('express');
const app = express();
const comments = require('./comments.json');

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// GET /comments/:id
app.get('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  res.json(comment);
});

// POST /comments
app.use(express.json());
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  const id = comments.length + 1;
  const newComment = { id, username, comment };
  comments.push(newComment);
  res.json(newComment);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});