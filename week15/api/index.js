const router = require("express").Router();
const get { getAll }

router.get("/test/:userId", function (req, res) {
  res.status(200).json({ msg: "Success", userId: req.params.userId });
});

module.exports = router;
