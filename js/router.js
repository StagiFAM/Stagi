const express = require('express');

const router = express.Router();

const taskscontroller = require('./controllers/tasksControllers');
const tasksMidlleware = require('./midlleware/tasksmidelleware');

router.get("/tasks", taskscontroller.getAll);
router.post("/tasks", tasksMidlleware.validateBody, taskscontroller.addTask);
router.delete("/tasks/:id", taskscontroller.deleteTask);
router.put("/tasks/:id", taskscontroller.updateTask);

module.exports = router;