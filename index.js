function theBeatlesPlay(musicians, instruments) {
  let finalArray = [];

  for(let i = 0, x = musicians.length; i < x; i++) {
    finalArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return finalArray
}

function johnLennonFacts(array) {
  let shoutedFacts = []

  let i = 0

  while (i < array.length) {
    shoutedFacts.push(`${array[i]}!!!`)
    i++
  }
  return shoutedFacts
}

function iLoveTheBeatles(number) {
  let x = [];
  do {
    x.push("I love the Beatles!");
    number++
  } while (number < 15);
  return x
}
