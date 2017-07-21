var string = "aabbccddeeffgghhiijj"

var boxes = []

for (var i=0; i<20; i++){
  var letter = string[Math.floor(Math.random()*string.length)]
  boxes[i] = {}
  boxes[i].id = (i+1).toString()
  boxes[i].letter = letter
  boxes[i].active = true

  string = string.replace(letter, '')
}

var activeBoxes = []

function showActiveBoxes(){
  boxes.map(function(box){
    if(box.active === true)
      activeBoxes.push(box.id)
      console.log(box.id, box.letter);
  })
}

function showLetter(id) {

  boxes.map(function(box){
    if(box.id === id)
      activeBoxes.map(function(activeBox){

      })
      activeBoxes[Number(id)-1] = box.letter
  })

  document.getElementById('boxes').innerHTML = "active boxes " + activeBoxes

}

function compareGuesses(guess1, guess2){
  if (boxes[Number(guess1)-1].letter === boxes[Number(guess2)-1].letter){
    boxes[Number(guess1)-1].active = false
    boxes[Number(guess2)-1].active = false
  }
  activeBoxes = []
  showActiveBoxes()
  document.getElementById('boxes').innerHTML = "active boxes " + activeBoxes
}
// function getLetter(input){
//   var letter = ''
//   boxes.map(function(box){
//     if(input === box.id)
//      letter = box.letter
//   })
//   console.log(letter)
//   return(letter)
// }
//
// function removeBoxes(letter1, letter2){
//   boxes.map(function(box){
//     if(letter1 === box.letter || letter2 === box.letter)
//      box.active = false
//   })
//   showActiveBoxes()
//   console.log("active boxes " + activeBoxes)
// }

var guesses = 0

// function game() {
//   showActiveBoxes()
//   console.log("active boxes " + activeBoxes)
//
//   var input1 = readline("enter first number")
//   console.log("first number " + input1);
//   var letter1 = getLetter(input1)
//
//   var input2 = readline("enter second number")
//   console.log("second number " +input2);
//   var letter2 = getLetter(input2)
//
//   if (letter1 === letter2){
//     removeBoxes(letter1, letter2)
//   }
//
//   guesses += 2
//   activeBoxes=[]
//   showActiveBoxes()
// }

// while(guesses < 40 || activeBoxes > 0){
//   game()
// }
showActiveBoxes()
document.getElementById('boxes').innerHTML = "active boxes " + activeBoxes
