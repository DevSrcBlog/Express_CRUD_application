const router = require("express").Router();
const controller = require("./controllers");

router.delete("/:todoId", controller.deleteTodos);
router.patch("/:todoId", controller.patchUpdateById);
router.put("/:todoId", controller.putUpdateById);
router.get("/:todoId", controller.findById);
router.get("/todos", controller.findAll);
router.post("/todos", controller.create);

module.exports = router;
