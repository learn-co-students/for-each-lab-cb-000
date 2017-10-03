function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  let array = ["Java", "Basic", "Fortran"]

  array.forEach(callback)

  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
