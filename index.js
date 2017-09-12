function iterativeLog(array) {
  index = 0;
  array.forEach(function(e) {
    console.log(`${index}: ${e}`);
    index++;
  });

}

function iterate(callback) {
  array = [1, 2, 3, 4, 5];
  array.forEach(callback);
  return array;

}


function doToArray(array, callback) {
  array.forEach(callback);
}
