function iterativeLog(ray) {
  ray.forEach((element, index, array) {
    console.log(`${index}: ${element}`)
  })
}
function iterate(callback) {
  var ray = [1,2,3]
  ray.forEach(callback)
  return ray
}
function doToArray(ray, callback) {
  ray.forEach(callback)
}
