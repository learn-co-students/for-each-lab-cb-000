function iterativeLog(array){
  array.forEach((el, i) => {
   console.log(`${i}: ${el}`)
 })
}

function iterate(callback) {
  var names=[4,3,2,1]
  names.forEach(callback)
  return names;
}

function doToArray(array, callback){
  array.forEach(callback);
}
