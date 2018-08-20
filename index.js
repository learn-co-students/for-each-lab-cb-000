function iterativeLog(array) {
  array.forEach((array, index) => {
    console.log(`${index}: ${array}`)
  });
}

function iterate(callback) {
  myArray = [1, 2, 3, 4, 5];
  myArray.forEach(callback);
  return myArray
}

function doToArray(array, callback) {
  array.forEach(callback);
}
