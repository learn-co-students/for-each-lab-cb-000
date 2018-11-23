function iterativeLog(arr) {
  arr.forEach(
    (element, index, arr) => {console.log(`${index}: ${element}`);}
  );
}

function iterate(action){
  var myArr = ["apples", "oranges", "bananas", "avocados"];
  myArr.forEach(action);
  return myArr;
}

function doToArray(arr, action) {
  arr.forEach(action);
}
