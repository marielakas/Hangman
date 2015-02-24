if (!Object.create) {
    Object.create = function (obj) {
        function f() { };
        f.prototype = obj;
        return new f();
    }
}

var scoreBoard = {
	init: function (userName) {
		this.score=0;
	},
	save: function (name){
		if(this.isEnoughGood()){
			local.addPlayersScore(htmlEscape(name), this.score);
		}
	},
	drawScore: function(){
		$("#current-score").html("<strong>"+this.score+"</strong> points")
	},
};
