function iterativeLog(array) {
  array.forEach((element, index) => {console.log(`${index}: ${element}`) ; } ) ;
}

function callback(element) {
  console.log(element);
}

function iterate(cbFunction) {
  var array = [1,2,3,4,5] ;
  array.forEach(cbFunction);
  return array  ; 
}


function doToArray(array, cbfunction) {
  array.forEach(cbfunction) ;
}
