function iterativeLog(array){
  array.forEach((e, i) => {
    console.log(`${i}: ${e}`)
  })
}

function iterate(callback){
  var arr = [1, 2, 3, 4]
  arr.forEach(callback);
  return arr;
}

function doToArray(array, callback){
  array.forEach(callback);
}
