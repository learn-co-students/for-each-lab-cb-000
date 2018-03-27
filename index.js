function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  heroes = ["Wonder Woman", "Black Widow", "Storm"];
  heroes.forEach(callback);
  return heroes
}

function doToArray(array, callback) {
  array.forEach(callback);
}
