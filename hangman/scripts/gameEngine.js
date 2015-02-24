
var numberOfMistakes=0;

var drawer=Object.create(drawer);
var keyboardGenerator=Object.create(keyboardGenerator);
keyboardGenerator.generate("#keyboard");
drawer.draw(0);
var word=Object.create(word);
var wordGenerator=Object.create(randomWordGenerator);
var wordTitle = wordGenerator.generate();
var scoreBoard=Object.create(scoreBoard);

scoreBoard.init();
word.init(wordTitle);
word.drawWord();

var gameStatus = Object.create(gameStatus);

$(".letter").on("click", function () {
	//if letter is available
	if($(this).css('opacity') == '1'){
		var chosenLetter = $(this).text();
		var points=word.contains(chosenLetter);
		if (points==0){
			numberOfMistakes++;
			drawer.draw(numberOfMistakes);
			if(scoreBoard.score>0){
				scoreBoard.score--;
			}
		}else{
			scoreBoard.score+=points;
		}
		scoreBoard.drawScore();
		gameStatus.check(numberOfMistakes, word);
		$("#used-letters").append(chosenLetter+" ");
		$(this).fadeTo(200, 0);
	}
});