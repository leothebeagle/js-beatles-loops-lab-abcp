function theBeatlesPlay(musicians, instruments) {
  let finalArray = [];
  let x = musicians.length;

  for(let i = 0; i < x; i++) {
    finalArray.push(musicians[i] + " plays " + instruments[i])
  }
  return finalArray
}

function johnLennonFacts(array) {
  let x = array.length
  let i = 0
  while (i < x) {
    array[i] += "!!!"
    i++
  }
  return array
}

function iLoveTheBeatles(number) {
  let x = [];
  do {
    x.push("I love the Beatles!");
    number++
  } while (number < 15);
  return x
}
