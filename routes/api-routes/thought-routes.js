const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  deleteThought,
  updateThoughtById,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getThoughtsById)
  .put(updateThoughtById)
  .delete(deleteThought);

module.exports = router;
