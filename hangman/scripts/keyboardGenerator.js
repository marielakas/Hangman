if (!Object.create) {
    Object.create = function (obj) {
        function f() { };
        f.prototype = obj;
        return new f();
    }
}

var keyboardGenerator = {
    generate: function (selector) {
        var container = $(selector);
        var letters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
        var lettersPerRow = 10;
        var lettersCount = 0;
        for (var i = 0; i < 26; i++) {
            container.append("<div class='letter'>"+letters[i]+"</div>");
            lettersCount++;
            if (lettersCount == lettersPerRow){
                container.append("<br/>");
                lettersPerRow--;
                lettersCount = 0;
            }
        }
       
    }
};