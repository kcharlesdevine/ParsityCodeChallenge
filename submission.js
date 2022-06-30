const findSum = function(userInput) {
  let sum = 0;

  for (let i = 0; i < userInput.length; i++) {
    sum += userInput[i];
  }
  return sum 
};


const findFrequency = function(userInput){
  let inputArray = userInput
  var counts = {};
  var compare = 0;
  var most;
  var least;
  for (let i = 0; i < inputArray.length; i++) {
    var letter = inputArray[i];
    if (counts[letter] === undefined){
      counts[letter] = 1;
    }
    else{
      counts[letter] = counts[letter] + 1;
    }
    if (counts[letter] > compare){
      compare = counts[letter];
      most = inputArray[i];
    }
  } 
  var numBasket = Object.values(counts) 
  let smallestNum =  Math.min(...numBasket)
  var keyValPairs = Object.keys(counts)
  
  for (let j = 0; j < keyValPairs.length; j++) {
    var currentKey = keyValPairs[j]
    if (counts[currentKey] === smallestNum){
      least = currentKey
    }
  }
  return { most, least}
};

const isPalindrome = function(userInput) {
  let flatString = userInput.toLowerCase();
  let splitString = flatString.split('');
  let reversedArray = splitString.reverse();
  let reversedString = reversedArray.join('');
    if (flatString === reversedString){
      return true 
    } 
     else {
      return false
    }
  };

const largestPair = function(userInput){
  var inputArray = userInput;
  var firstChoice = 0;
  var secondChoice = 0;
  var choiceSum = 0;
    for (let i = 0; i < inputArray.length; i++) {
      firstChoice = inputArray[i];
      secondChoice = inputArray[i + 1];
        if (firstChoice * secondChoice > choiceSum){
          choiceSum = firstChoice * secondChoice;
        };
      };
      return choiceSum
};


const removeParenth = function(userInput) {
  let brokenString =  userInput.split('');
  let keepChar = true 
  let savedChar = []
  for (let i = 0; i < brokenString.length; i++) {
    let currentChar = brokenString[i]
    if (currentChar === '('){
      keepChar = false
    } else if (currentChar === ')'){
      keepChar = true 
      continue
    } 
    if (keepChar === true){
      savedChar.push(currentChar)
    } 
  }; 
  let resultString = savedChar.join('') 
  return resultString
};

const scoreScrabble = function(userInput) {
  let scoreKey = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'l': 1, 'n': 1, 'r': 1, 's': 1, 't': 1, 'd': 2, 'g': 2, 'b': 3, 'c': 3, 'm': 3, 'p': 3, 'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4, 'k': 5, 'j': 8, 'x': 8, 'q': 10, 'z': 10}
  let inputArray = userInput.split('');
  let totalScore = 0

  for (let i = 0; i < inputArray.length; i++) {
    let currentLetter = inputArray[i]
    totalScore += scoreKey[currentLetter]
  }
  return totalScore
};
