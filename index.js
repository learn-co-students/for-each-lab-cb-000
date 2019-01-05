 
function doToArray(array, callback) {
  array.forEach(callback);
}

function iterativeLog(array) {
  array.forEach( (element, index, array) => {console.log(`${index}: ${element}`)})
}

function iterate(callback) {
  var array = ["dog", "cat", "fish", "bird", "squirrel"];
  array.forEach(callback);
  return array
}

