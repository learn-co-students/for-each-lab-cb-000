function iterativeLog(array){

  array.forEach((el, i) => {
    console.log(`${i}: ${el}`)
  })

}


function iterate(callback){
  const cars = ["Ferrari", "Mercedez", "BMW"]
  cars.forEach(callback)
  return cars
}

function doToArray(array,callback){
  array.forEach(callback)
  
}
