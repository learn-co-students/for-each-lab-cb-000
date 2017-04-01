function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var sample_arr = [0, 1, 2];
  sample_arr.forEach(callback);
  return sample_arr;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
