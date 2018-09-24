const interativeLog = (arr) => {
    arr.forEach((element, index) => {
        console.log(`${index}: ${element}`)
    })
}

// interativeLog([1,2,3,4,5])


const iterate = (callback) => {
  let arr = [1, 2, 3, 4, 5]
  arr.forEarch(callback)
  return arr
}

const doToArray = (array, callback) => {
  array.forEach(callback)
}
