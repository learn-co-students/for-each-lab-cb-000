function iterativeLog(array) {
  array.forEach((element,index) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  debugger
  var items = ['banana', 'redbull', 'awesome', 'chocolate'];
  items.forEach(callback);
  return items;
}

function doToArray(array, callback) {

  array.forEach(callback);
}
