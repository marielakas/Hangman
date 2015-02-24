if (!Object.create) {
    Object.create = function (obj) {
        function f() { };
        f.prototype = obj;
        return new f();
    }
}

var randomWordGenerator={
	generate: function(){
		var words = "";
		var word = "";
		$.ajax({
			async: false,
			url : "words/list.txt",
			dataType: "text",
			success : function (data) {
				words = data.split(",");
				word = words[Math.floor(Math.random()*words.length)];
			}
		});
		return word;
	}
};