var cards = ["King", "King", "Queen", "Queen"];
var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Better luck next time!")
		}
	} 
}

var flipCard =  function (cardId) {

	cardsInPlay.push(cards[cardId]);
	console.log("User fliped " + cards[cardId]);
	checkForMatch();
}


flipCard(0);
flipCard(2);


