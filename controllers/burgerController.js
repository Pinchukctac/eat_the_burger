var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


//Setup Routes

// Index Redirect
router.get('/', function (req, res) 
{
  burger.all(function(data) 
  {
    var hbsObject = { burger: data };
    //console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// Create a New Burger
router.post('/burger/create', function (req, res) {
  burger.insertOne(
    [
      "burger_name",
      "devoured"
    ],
    [
      req.body.burger_name,
      req.body.devoured
    ],

    function (result) {
      res.json({ id: result.insertId });
    });
  });

// Devour a Burger
router.post('/api/burger/:id', function (req, res){
  var condition = "id =" + req.params.id;

  burger.updateOne(
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