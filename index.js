function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  someArray = ["Larry", "Mo", "Curly"]
  someArray.forEach(callback)
  return someArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}
