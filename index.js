function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  const moods = ["Happy", "Energetic", "Joyful"]
  moods.forEach(callback)
  return moods
}

function doToArray(array, callback) {
  array.forEach(callback)
}
