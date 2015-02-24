if (!Object.create) {
    Object.create = function (obj) {
        function f() { };
        f.prototype = obj;
        return new f();
    }
}

var word = {
    init: function (stringWord) {
        this.value=stringWord.toLowerCase();
		return this.value;
    },
    drawWord: function () {
        var word = $("#word");
        for (var i = 0; i < this.value.length; i++)
        {
            if (i == 0) {
                word.append("<span id=" + i + ">"+this.value[0]+" </span>");
            } else if (i == this.value.length -1) {
                word.append("<span id=" + i + ">" + this.value[i] + " </span>");
            } else {
                word.append("<span id=" + i + ">_ </span>");
            }
        }
    },
    contains: function (letter) {
        var answer = 0;
        letter = letter.toLowerCase();
        for (var i = 1; i < this.value.length-1; i++) {
            if (letter == this.value[i]) {
                answer += 1;
				//alert(scoreBoard.score);
                 $("#" + i).html(letter+" ");
            }
        }
        return answer;
    },
    isRevealed: function (){
        if ($("#word").text().indexOf("_")>=0){
            return false;
        }
        return true;
    }
};