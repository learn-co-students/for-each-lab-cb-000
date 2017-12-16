function iterativeLog (array) {
  array.forEach( (element, index) => {
    console.log ( `${index}: ${element}` )
  } )
}

function iterate (callback) {
  var myArr = ["a", "b", "c", "d"]

  myArr.forEach( (element) => {
    callback(element)
  } )
  return myArr
}

function doToArray (array, callback) {
  array.forEach( (element) => {
    callback(element)
  } )
}
