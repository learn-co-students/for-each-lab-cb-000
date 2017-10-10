function iterativeLog(array) {
  array.forEach((index, element) => {
    console.log(`${element}: ${index}`)
  })
}

function iterate(callback) {
  var stuff = ['garage', 'lot', 'grass', 'door']
  stuff.forEach(callback)
  return stuff
}

function doToArray(array, callback) {
  array.forEach(callback)
}
