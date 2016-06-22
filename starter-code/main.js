/*Declaring variables for the four cards*/
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo===cardFour){
	alert('Sorry, try again.');
}
else if (cardOne===cardThree){
	alert('Sorry, try again.');
}
else if (cardOne===cardTwo){
	alert('You found a match!');
}
else if (cardThree===cardFour){
	alert('You found a match!');
}*/

var cards=['queen' , 'queen', 'king', 'king' ];
var cardsInPlay=[];
var gameBoard = document.getElementById("game-board");

var createBoard = function () {
    for (var i = 0; i< cards.length; i++) {
    	  var cardElement=document.createElement('div');
    	   	cardElement.className='card';
    	 	cardElement.setAttribute('data-card', cards[i]);
    	 	cardElement.addEventListener('click', isTwoCards);
    	 	gameBoard.appendChild(cardElement);
    	 	
   
}
}



var isMatch = function (cards){
  // alert winning message
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card')==='king'){
	this.innerHTML = "<img src='my_king.png' alt='King of Hearts'/>"
}
else{
	this.innerHTML = "<img src='my_queen.png' alt='Queen of Hearts'/>"
}
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}

createBoard();