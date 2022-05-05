const fs = require('fs');
const data = require('./data.json');

// User can read their notes
if (process.argv[2] === 'read') {
  for (const id in data.notes) {
    console.log(id + ':', data.notes[id]);
  }
}

// User can add a note
if (process.argv[2] === 'create') {
  data.nextId++;
  data.notes[data.nextId] = process.argv[3];

  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}

// User can delete a note
if (process.argv[2] === 'delete') {
  delete data.notes[process.argv[3]];

  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}

// User can update a note
if (process.argv[2] === 'update') {
  data.notes[process.argv[3]] = process.argv[4];

  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}
