function iterativeLog(array) {
    array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
    });
  }
  
  function iterate(callback) {
    var food = ['steak', 'potatos', 'corn'];
    food.forEach(callback);
    return food;
  }
  
  function doToArray(array, callback) {
    array.forEach(callback);
  }