var gameStatus={
	check: function(numberOfMistakes, word){
		if(numberOfMistakes>8){
			this.looseGame();
			return false;
		}else
		if(word.isRevealed()){
			this.winGame();
			return true;
		}
	},
	looseGame: function(){
		var looseMsg = "Game Over!";
		$("#prompt-message #prompt-message-text").text(looseMsg)
		this.showMessage()
		$("#word").html(word.value);
	},
	winGame: function(){
		var i = 3;
		var winMsg = "You solved the word with "+ scoreBoard.score +" points<br/>";
			winMsg +="Please enter your name:</br>";
			winMsg += "<input type='text' id='player-name'>";
		$("#prompt-message #prompt-message-text").html(winMsg);
		$("#prompt-message-buttons-set").prepend("<input type='button' id='submit-name' value='Submit'>");
		
		// submit player name
		var that = this;
		$("#submit-name").on("click", function(){
			var playerName = $("#player-name").val();
			if(playerName == "") {
				alert("Please input name!");
				return false;
			}
			local.addPlayersScore(playerName, scoreBoard.score);
			score = local.readAllScores();
			score.sort(function (a, b) { return a[1] - b[1]; });
			// remove all but top 5 results
			while (score.length > 5) {
				score.splice(score.length - 1, 1);
			}
			local.clearScore();
			local.setTopFive();
			that.setAndShowScoreBoard();
		});
		this.showMessage()
	},
	showMessage: function(){
		$("#overlay").fadeIn("slow");
		$("#prompt-message").fadeIn("slow");
		$("#again").on("click", function(){
			location.reload();
		});

	},
	setAndShowScoreBoard: function() {
		var scoreBoard = $("#prompt-message #prompt-message-text");
		$("#submit-name").remove();
		scoreBoard.html();
		var content = "<ol>";
		for (var i = 0; i < score.length; i++) {
			 content += "<li>"+score[i][0]+"<span class='right'> "+score[i][1]+"т.</span></li>";
		}
		content += "</ol>";
		scoreBoard.html(content);
	}
};