const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET route to get all feedback for the admin view
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM feedback ORDER BY created_at DESC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`GET successful!`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

// POST route for adding feedback to the db
router.post('/', (req, res) => {
    const feedback = req.body;
    const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES 
  ($1, $2, $3, $4)`;
    pool.query(sqlText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then((result) => {
            console.log(`Added feedback to database`, result);
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

// DELETE route for removing feedback
router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id', reqId);
    let sqlText = 'DELETE FROM feedback WHERE id=$1;';
    pool.query(sqlText, [reqId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); 
        })
})

module.exports = router;