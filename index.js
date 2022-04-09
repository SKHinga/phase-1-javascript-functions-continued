// code your solution here
function saturdayFun (activity = 'roller-skate'){
  return `This Saturday, I want to ${activity}!`
}
saturdayFun('bathe my dog');
function mondayWork (doing = 'go to the office') {
  return `This Monday, I will ${doing}.`
}
doing('work from home');

function wrapAdjective(result = '*'){
  return function emphatic (one = 'special'){
    return `You are ${result}${one}${result}!`
  }
};
wrapAdjective()('a hard worker');
wrapAdjective('||')('a dedicated programmer');