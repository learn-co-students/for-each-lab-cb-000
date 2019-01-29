var iterativeLog = (items) => {
  items.forEach((element, index, items) => {
    console.log(`${index}: ${element}`);
  });
};

var iterate = (callback) => {
  new_array = ["thingOne", "thingTwo", "thingThree"];
  new_array.forEach(callback);
  return new_array;
};

var doToArray = (array, callback) => {
  array.forEach(callBack)
}
