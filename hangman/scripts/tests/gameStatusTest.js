module("Test game status");
if (!Object.create) {
    Object.create = function (obj) {
        function f() { };
        f.prototype = obj;
        return new f();
    }
};

test("Check method test", function(){
	var status = Object.create(gameStatus);
	var testWord = Object.create(word);
	var actual = testWord.init("Telerik")
	var isWin=status.check(6, testWord);	
	equal(isWin, true);
});

test("Check method test 2", function(){
	var status = Object.create(gameStatus);
	var testWord = Object.create(word);
	var actual = testWord.init("Computer")
	var isWin=status.check(0, testWord);	
	equal(isWin, true);
});

test("Check method test 3", function(){
	var status = Object.create(gameStatus);
	var testWord = Object.create(word);
	var actual = testWord.init("Telerik")
	var isWin=status.check(10, testWord);	
	equal(isWin, false);
});

test("Check method test 4", function(){
	var status = Object.create(gameStatus);
	var testWord = Object.create(word);
	var actual = testWord.init("Telerik")
	var isWin=status.check(9, testWord);	
	equal(isWin, false);
});
