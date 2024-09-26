const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks
router.get('/', async (req, res) => {
    const tasks = await Task.findAll();
    res.json(tasks);
});

// Add a task
router.post('/', async (req, res) => {
    const newTask = await Task.create(req.body);
    res.json(newTask);
});

// Update a task
router.put('/:id', async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    if (task) {
        task.update(req.body);
        res.json(task);
    } else {
        res.status(404).send('Task not found');
    }
});

// Delete a task
router.delete('/:id', async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    if (task) {
        await task.destroy();
        res.send('Task deleted');
    } else {
        res.status(404).send('Task not found');
    }
});

module.exports = router;

