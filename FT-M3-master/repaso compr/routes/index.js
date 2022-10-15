const express = require('express');
const router = express.Router();

const usersRoutes = require('./users.js')
const tasksRoutes = require('./tasks.js')


router.use("/users", usersRoutes)
router.use("/tasks", tasksRoutes)

router.get('/', function (req, res) {
    res.status(200).send('INICIEMOS CON NUESTRO SERVER');
    });




module.exports = router      
