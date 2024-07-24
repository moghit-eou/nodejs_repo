const express = require('express');
const app = express();
const port = 3000;

const taskRoutes = require('./routes/taskRoutes');

// Basic route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API!');
});

app.use(express.json());
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
