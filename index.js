// Define a function, iterativeLog(), that accepts an array. Call .forEach()
// on this array, and inside the callback, log each element with the format
// ${index}: ${element}.

var iterativeLog = arr => {
  arr.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  });
};

// Define a function, iterate, that accepts a callback. Within the iterate()
// function, you should initialize an array. It can contain anything you want,
// but make sure that it is not empty! Call .forEach() on this array, passing
// the callback to .forEach(). Then return the array that you initialized.

var iterate = callback => {
  let arr = [1, 2, 3];
  arr.forEach(callback);
  return arr;
};

// Define a function, doToArray that accepts an array and a callback. Call
// .forEach() on the array, passing the callback as the forEach callback.

var doToArray = (arr, cb) => arr.forEach(cb);
