// handle web requests, serve templates to the user
// and interact with models to process and retrieve data

var express = require('express');
var router = express.Router();
var Carpark = require('../models/carpark');

router.post('/:id/checkin', function(req,res){
  var id = req.params.id;
  var entryTime = req.body.entryTime;

  Carpark.checkin(id,entryTime,function(err,callback){
    res.status(200).send('Checkin completed');
  })
});

router.get('/:id/checkprice', function(req, res){
  var id = req.params.id;
  var currentTime = req.query.currentTime;
  Carpark.checkprice(id,currentTime,function(err,callback){

    if (err){
      if (err.message == "You have not checked in properly"){
        res.status(503).send(err.message);
      }
      else {
        res.status(503).send(err.message);
      }
    }
    else {
      curFee = "Current fee = " + callback
      res.status(200).send(curFee)
    }
  })
});

module.exports = router;
