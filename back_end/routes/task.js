const { addTask,getAllTasks,getTask ,updateTask,deleteTask} = require('../controller/task.controller');

const router = require('express').Router();

router.post('/addtask', addTask)
router.get('/task/:id',getTask)
router.get('/alltasks', getAllTasks)
router.patch('/edittask/:id',updateTask)
router.delete('/deletetask/:id',deleteTask)

module.exports = router