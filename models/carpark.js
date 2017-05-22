var allMalls = require('../data.js');
var entryTime = null
  , curMallId = null;

// takes in time in ms
// and return [hr,min]
cleanTime = function(ms){
  h = Math.floor((ms/(1000*60*60))%24);
  m = Math.round((ms/(1000*60))%60);
  return [h,m]
};

// checkin of carpark takes in mall_id, date in isostring
exports.checkin = function(id,date,callback){
  entryTime = new Date(date);
  curMallId = id;
  callback();
};

// checkprice takes in mall_id
// if no error, return parking fee
exports.checkprice = function(id,callback){

  curMall = allMalls.malls[id-1];
  curTime = new Date();
  parkingTime = cleanTime(curTime - entryTime);
  hour = parkingTime[0];
  min = parkingTime[1];

  // can't calculate price since assumption of staying in
  // mall is max at 16 hrs
  if (hour > 15) {
    return callback(new Error("Price not in range"))
  }

  // unmatch mall id
  if (curMallId !== id) {
    return callback(new Error("You have not checked in properly"));
  }
  else {
    if (parkingTime[1] > curMall.rounder) {
      return callback(null,curMall.fees[hour+1])
    }
    else {
      return callback(null,curMall.fees[hour])
    }
  }
}
