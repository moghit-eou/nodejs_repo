let tasks = [];
let nextId = 1;

// Create a new task
exports.createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }
  const newTask = { id: nextId++, title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// Get all tasks
exports.getAllTasks = (req, res) => {
  res.json(tasks);
};

// Get a task by ID
exports.getTaskById = (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
};

// Update a task by ID
exports.updateTaskById = (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  const { title, description } = req.body;
  if (title) task.title = title;
  if (description) task.description = description;
  res.json(task);
};

// Delete a task by ID
exports.deleteTaskById = (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  res.status(204).send();
};
