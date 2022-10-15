const router = require("express").Router();
const {
  getUsers,
  postUser,
  updateUser,
  deleteUser,
  postInitialAllApi
} = require("../controllers/controllers");

router.get("/", async function (req, res) {
  try {
    const users = await getUsers() 
    res.send(users)
  } catch (error) {
    res.status(500).send(error)
  }
});
router.post("/", async function (req, res) {
  try {
    const { userName } = req.body
    const user = await postUser(userName)
    res.status(200).json('creado con éxito')
  } catch (error) {
    res.status(500).send(error)
  } 
});

router.post("/initialApiInfo", function (req, res) {
    try {
      postInitialAllApi()
      res.status(200).json('all data api created')
    } catch (error) {
      res.status(500).send(error)
    }
  });

  router.delete("/:id", function (req, res) {
    try {
      const id = req.params.id
      deleteUser(parseInt(id))
      res.status(200).json('eliminado con éxito')
    } catch (error) {
      res.status(500).send(error)
    }
  });

module.exports = router;
/*
router.get('/'
--> exportamos
importa index
"/users/"
exportamos
importa app
localhost:3001/users/



app
localhost:3001/
routes/index.js
localhost:3001/ users
routes/ users
localhost:3001/ users / casa

*/
