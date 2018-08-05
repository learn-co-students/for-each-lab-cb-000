// function iterativeLog(array) {
//   array.forEach(element => console.log(`${index}: ${element}`)
// }

function iterativeLog (array) {
    array.forEach((element, index) => {
      console.log(`${index}: ${element}`);

})
};

function iterate (callback) {

  array = [1,2,3];

    array.forEach(element => {
      callback(element)

})
return array
};

function doToArray (array, callback) {

    array.forEach(element => {
      callback(element)

})
return array
};
