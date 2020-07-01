'use strict';

require('dotenv').config();

// Dependencies
const express = require('express');
const cors = require('cors');
const pg = require('pg');

// Initialize the App
const app = express();
app.use(cors());

// Global Variables
const PORT = process.env.PORT;
const client = new pg.Client(process.env.DATABASE_URL);




// Route Definitions
app.get('/todo', handleToDo);

// Route Handlers
function handleToDo((request, response) => {

  let thingsToDo = request.query.task;
  let SQL = 'INSERT INTO tasks (task) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  let todoValues = [thingsToDo];
  client.query(SQL, todoValues)
    .then( results => {
      response.status(200).json(results);
    })
    .catch( error => handleError(error));
  // let thingsToDo = [
  //   { task: 'watch tv' },
  //   { task: 'walk rosie' },
  //   { task: 'practice for lecture' },
  //   { task: 'cooking' },
  //   { task: 'eat cookies' },
  //   { task: 'take a nap' },
  // ];

});

// Go!

app.listen(PORT, () => console.log('Server is running'));

app.use('*', (request, response) => {
  response.status(404).send('You broke something.. Good job.');
});
