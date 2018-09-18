function iterativeLog(array) {
  array.forEach(`${index}: ${element}`);
}

function iterate(callback) {
  var array = ['banana', 'redbull', 'awesome', 'chocolate'];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
