function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`)
  });
}

function iterate(cb) {
  var array = ['Apple', 'Banana', 'Orange'];
  array.forEach(cb)
  return array;
}

function doToArray(array, cb) {
  array.forEach(cb);
}