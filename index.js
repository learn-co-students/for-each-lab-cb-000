function iterativeLog(arr) {
  arr.forEach((element, index, arr) => {console.log(index +": " + element)});
}

function iterate(cb) {
  var arr = ["test"]
  arr.forEach(cb)
  return arr
}

function doToArray(arr, cb) {
  arr.forEach(cb)
}
