function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const itArray = ["time", "to", "go"]

  itArray.forEach(callback)
  return itArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}
