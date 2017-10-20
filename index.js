function iterativeLog(array) {
  array.forEach((index, element) => {
    console.log(`${element}: ${index}`)
  })
}

function iterate(callback) {
  var sports = ['soccer', 'basketball', 'tennis']
  sports.forEach(callback)
  return sports
}

function doToArray(array, callback) {
  array.forEach(callback)
}
