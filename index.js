function iterativeLog(array) {
  array.forEach(function(element, index, array) {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  var iceCream = ["vanilla", "strawberry", "chocolate"];
  iceCream.forEach(callback);
  return iceCream;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
