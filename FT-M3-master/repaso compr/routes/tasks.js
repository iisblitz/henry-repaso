const router = require('express').Router();
const {
    postTask
  } = require("../controllers/controllers")

router.post('/', function(req, res, next) {
    try {
        const {description, userId} = req.body
        postTask(description,userId)
        res.status(200).send("tarea asignada con éxito")
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router