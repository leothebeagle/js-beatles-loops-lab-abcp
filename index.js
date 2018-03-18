function theBeatlesPlay(musicians, instruments) {
  let talent = []
  for(let i = 0, x = musicians.length; i < x; i++) {
    talent.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return talent
}
function johnLennonFacts(statements) {
  let shouts = []
  let i = 0
  while(i < statements.length) {
    shouts.push(`${statements[i]}!!!`);
    i++
  }
  return shouts
}

function iLoveTheBeatles(number) {
  let fan = [];
  do {
    fan.push("I love the Beatles!");
  } while(number < 15);
  return fan
}
