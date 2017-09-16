function iterativeLog(array) {
  const l = array.length

  for(let i = 0; i < l; i++) {
    let index = i
    let element = array[index]
    console.log(`${index}: ${element}`)
  }
}

function iterate(callback) {
  let array = [1,2,3,4,5]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
