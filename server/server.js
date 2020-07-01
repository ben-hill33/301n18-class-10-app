'use strict';

require('dotenv').config();

// Dependencies
const express = require('express');
const cors = require('cors');

// Initialize the App
const app = express();
app.use(cors());

// Global Variables
const PORT = process.env.PORT || 3000;


// Route Definitions
app.get('/todo', handleToDo());

// Route Handlers
function handleToDo(request, response) {

  let thingsToDo = [
    { task: 'watch tv' },
    { task: 'walk rosie' },
    { task: 'practice for lecture' },
    { task: 'cooking' },
    { task: 'eat cookies' },
    { task: 'take a nap' },
  ];

  response.status(200).json(thingsToDo);
}

// Go!

app.listen(PORT, () => console.log('Server is running', PORT));


app.use('*', (request, response) => {
  response.status(404).send('You broke something.. Good job.');
});
