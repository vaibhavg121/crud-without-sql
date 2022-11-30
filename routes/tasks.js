const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;

/*
const router = express.Router();
router.route("/").get((req, res) => {
  res.send("All Items");
});
*/
//Equivalent to ------->
/*
const app = express();
app.get("/", (req, res) => {
  res.send("New Response");
});
*/
///////////////////////////////////////////////////////////////////////////
//Instead of this... -> replace the callback fn with imported fn
/*
router.route("/").get((req, res) => {
    res.send("All Items");
})
*/
//So, above code becomes---->
//router.route("/").get(getAllTasks);
/////////////////////////////////////////////////////////////////////////////////////
