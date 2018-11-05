const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET route to get all feedback for the admin view
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM feedback ORDER BY created_at DESC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})


// Setup a POST route to add a new employee to the database
router.post('/', (req, res) => {
    const employee = req.body;
    const sqlText = `INSERT INTO employees (firstName, lastName, jobTitle, annualSalary) VALUES 
  ($1, $2, $3, $4)`;
    pool.query(sqlText, [employee.firstName, employee.lastName, employee.jobTitle, employee.annualSalary])
        .then((result) => {
            console.log(`Added to the database`, employee);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

// Setup DELETE to remove an employee
router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id', reqId);
    let sqlText = 'DELETE FROM employees WHERE id=$1;';
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