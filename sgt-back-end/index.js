const pg = require('pg');
const express = require('express');
const app = express();

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

// GET
app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

// POST
app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  const score = Number(req.body.score);
  if (!newGrade.name || !newGrade.course || !score) {
    res.status(400).json({
      error: 'name, course, or score is a required field'
    });
  } else if (!Number.isInteger(score) || score <= 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else {
    const sql = `
    insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
      `;

    const params = [newGrade.name, newGrade.course, score];
    db.query(sql, params)
      .then(result => {
        const grades = result.rows[0];
        res.status(201).json(grades);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

// PUT
app.put('/api/grades/:gradeId', (req, res) => {
  const updateId = Number(req.params.gradeId);
  const score = Number(req.body.score);
  const updateGrade = req.body;
  if (!updateGrade.name || !updateGrade.course || !score) {
    res.status(400).json({
      error: 'name, course, or score is a required field'
    });
  } else if (!Number.isInteger(score) || score <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
  } else {
    const sql = `
      update "grades"
      set  "name" = $1,
            "course" = $2,
            "score" = $3
      where  "gradeId" = $4
      returning *
      `;

    const params = [updateGrade.name, updateGrade.course, score, updateId];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: 'Cannot find grade with such id'
          });
        } else {
          res.status(200).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

// DELETE

app.delete('/api/grades/:gradeId', (req, res) => {
  const deleteId = Number(req.params.gradeId);
  if (!Number.isInteger(deleteId) || deleteId <= 0) {
    res.status(400).send({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const sql = `
      delete from "grades"
      where  "gradeId" = $1
      returning *
      `;

  const params = [deleteId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: 'Cannot find grade with such id'
        });
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// LISTEN
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
