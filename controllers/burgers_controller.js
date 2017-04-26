var express = require('express');
var burgers = require("../models/burger.js");

var router = express.Router();


router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burgers.insert(["burger_name"],
  [req.body.name], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update({
    devoured: 1
  }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;
