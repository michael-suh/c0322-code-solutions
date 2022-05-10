const express = require('express');
const app = express();
const dataJSON = require('./data.json');
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  const arr = [];
  for (const key in dataJSON.notes) {
    arr.push(dataJSON.notes[key]);
  }
  res.json(arr);
});

// GET NOTE BY ID
app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!dataJSON.notes[id]) {
    res.status(404).json({ error: 'Cannot find note such id' });
  } else {
    res.json(dataJSON.notes[id]);
  }
});

app.use(express.json());

// POST NEW NOTE
app.post('/api/notes/', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    req.body.id = dataJSON.nextId++;
    dataJSON.notes[req.body.id] = req.body;
    fs.writeFile('data.json', JSON.stringify(dataJSON, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured' });
      } else {
        res.status(201).json(req.body);
      }
    });
  }
});

// DELETE NOTE BY ID
app.delete('/api/notes/:id', (req, res) => {
  const deleteId = Number(req.params.id);
  if (!Number.isInteger(deleteId)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!dataJSON.notes[deleteId]) {
    res.status(404).json({ error: 'Cannot find such id' });
  } else {
    delete dataJSON.notes[deleteId];
    fs.writeFile('data.json', JSON.stringify(dataJSON, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured' });
      } else {
        res.status(204).json(req.body);
      }
    });
  }
});

// REPLACE A NOTE BY ID
app.put('/api/notes/:id', (req, res) => {
  const replaceId = Number(req.params.id);
  if (!Number.isInteger(replaceId)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if ((!req.body.content)) {
    res.status(400).json({ error: 'Content is a required field' });
  } else if (!dataJSON.notes[replaceId]) {
    res.status(404).json({ error: 'Cannot find such id' });
  } else {
    dataJSON.notes[replaceId].content = req.body.content;
    fs.writeFile('data.json', JSON.stringify(dataJSON, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured' });
      } else {
        res.status(200).json(dataJSON.notes[replaceId]);
      }
    });
  }
});

// LISTEN
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
