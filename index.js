function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  var places = ["New York", "Paris", "San Francisco"];
  places.forEach(callback);
  return places;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
