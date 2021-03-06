var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


//Setup Routes

// Index Redirect
router.get('/', function (req, res) 
{
  burger.selectAll(function(data) 
  {
    var hbsObject = { burger: data };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// Create a New Burger
router.post('/api/burgers/create', function (req, res) {
  console.log(req.body);
  burger.insertOne(
    [
      "burger_name",
      "devoured"
    ],
    [
      req.body.name,
      req.body.devoured
    ],

    function (result) {
      res.json({ id: result.insertId });
    });
  });

// Devour a Burger
router.put('/api/burgers/:id', function (req, res){
  var condition = "id =" + req.params.id;

  burger.update(
    {devoured: req.body.devoured},
    condition, function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
    }
  });
});

// Export routes
module.exports = router;