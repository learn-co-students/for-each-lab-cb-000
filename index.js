var iterativeLog = (array) => {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  });
};

var iterate = (callback) => {
  array = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];
  array.forEach(callback);
  return array;
};

var doToArray = (array, callback) => {
  array.forEach(callback);
};
