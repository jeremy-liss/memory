var string = "aabbccddeeffgghhiijj"

var boxes = []
var activeBoxes = []
var guesses = 0
var nullBoxes = 0

for (var i=0; i<20; i++){
  //randomly assign a letter to an index in the boxes array
  var letter = string[Math.floor(Math.random()*string.length)]
  boxes[i] = letter
  //remove letter from string to ensure it is only used once
  string = string.replace(letter, '')
}

function showActiveBoxes(){
  //create an array showing the active boxes (the ones that are not null)
  boxes.map(function(box, i){
    if(box !== null)
      activeBoxes.push(i+1)
  })
}

function showLetter(id) {
  //check the entered letter against all active boxes. When they match show the corresponding letter from the boxes array
  for(var i=0; i<activeBoxes.length; i++){
    if (Number(id) === activeBoxes[i]){
      activeBoxes[i] = boxes[Number(id)-1]
    }
  }
  //count each guess
  guesses ++
  updateDisplay()
  //if maximum guesses hit, player loses
  if(guesses === 40){
    alert("Game Over!")
  }
}

function compareGuesses(guess1, guess2){
  //when both guesses are submitted compare the corresponding letters from the boxes array. If they match change the value to null
  if (boxes[Number(guess1)-1] === boxes[Number(guess2)-1]){
    boxes[Number(guess1)-1]= null
    boxes[Number(guess2)-1] = null
  }
  //update the nullBoxes counter
  boxes.map(function(box){
    if(box === null){
      nullBoxes ++
    }
  })
  //reset the activeBoxes array and update the display
  activeBoxes = []
  showActiveBoxes()
  updateDisplay()
  //if all boxes are null player wins
  if (nullBoxes === 20){
    alert("You Win!")
  }
}

function updateDisplay(){
  document.getElementById('boxes').innerHTML = "active boxes " + activeBoxes
  document.getElementById('guesses').innerHTML = "guesses: " + guesses
}

showActiveBoxes()
updateDisplay()
