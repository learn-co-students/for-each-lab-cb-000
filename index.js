function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  let planes = ['skyhawk', 'archer', 'spitfire', 'mustang']
  planes.forEach(callback);
  return planes;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
