module("Test word");
if (!Object.create) {
    Object.create = function (obj) {
        function f() { };
        f.prototype = obj;
        return new f();
    }
};

test("Test constructor with Telerik ", function(){
	var testWord = Object.create(word);
	var actual = testWord.init("Telerik")
	equal(actual, "telerik");
});

test("Test constructor with TELERIK" , function(){
	var testWord = Object.create(word);
	var actual = word.init("TELERIK");
	equal(actual, "telerik");
});

test("Test constructor with TeleRiK" , function(){
	var testWord = Object.create(word);
	var actual = word.init("TeleRiK");
	equal(actual, "telerik");
});

test("Test constructor with Computer" , function(){
	var testWord = Object.create(word);
	var actual = word.init("Computer");
	equal(actual, "computer");
});

test("Test constructor with different values" , function(){
	var testWord = Object.create(word);
	var actual = word.init("Telerik");
	notEqual(actual, "computer");
});

test("Contains method", function(){
	var testWord = Object.create(word);
	var actualWord = word.init("Telerik");
	
	var actual = testWord.contains("e");
	
	equal(actual, true);
});

test("Contains method with capital letter", function(){
	var testWord = Object.create(word);
	var actualWord = word.init("Telerik");
	
	var actual = testWord.contains("R");
	
	equal(actual, true);
});

test("Contains method 2", function(){
	var testWord = Object.create(word);
	var actualWord = word.init("computer");
	
	var actual = testWord.contains("e");
	
	equal(actual, true);
});

test("Contains method with capital letter 2", function(){
	var testWord = Object.create(word);
	var actualWord = word.init("COMPUTER");
	
	var actual = testWord.contains("P");
	
	equal(actual, true);
});
