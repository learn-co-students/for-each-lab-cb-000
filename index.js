function iterativeLog(array){
  array.forEach(item => {
    console.log(`${array.indexOf(item)}\: ${item}`);
  });
};

function iterate(callback){
  var array = new Array("Mike", "Matt");
  array.forEach(callback);
  return array;
};

function doToArray(array, callback){
  array.forEach(callback);
}
