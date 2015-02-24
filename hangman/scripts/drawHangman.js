// bloka pravi konflikti s jquery. izkliuchvam go za sega shte go opravim posle

// if (!Object.create) {
//     Object.create = function (obj) {
//         function f() { };
//         f.prototype = obj;
//         return new f();
//     }
// }
 
// if (!Object.prototype.extend) {
//     Object.prototype.extend = function (properties) {
//         function f() { };
//         f.prototype = Object.create(this);
//         for (var prop in properties) {
//             f.prototype[prop] = properties[prop];
//         }
//         f.prototype._super = this;
//         return new f();
//     }
// }

var drawer={
  draw: function(mistakes) {
    var ctx = document.getElementsByTagName("canvas")[0].getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;

    ctx.moveTo(10, 400);
    ctx.lineTo(100, 400);
    ctx.stroke();

    //drawing the gallow
    if (mistakes > 0) {

        ctx.moveTo(55, 400);
        ctx.lineTo(55, 50);
        ctx.stroke();
    }
    if (mistakes>1){
        ctx.lineTo(250, 50);
        ctx.stroke();
    }
    if (mistakes>2){
        ctx.lineTo(250, 100);
        ctx.stroke();
    }

    //drawing hangman
    ctx.lineWidth = 2;
    ctx.beginPath();

    //head
    if (mistakes > 3) {
        ctx.arc(250, 125, 25, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
    }
	
    //neck
    if (mistakes > 4) {
        ctx.moveTo(250, 150);
        ctx.lineTo(250, 250);
        ctx.stroke();
        
    }
    
    //hands
    if (mistakes > 5) {
        ctx.moveTo(300 - 50, 195 - 30);
        ctx.lineTo(200, 150);
        ctx.stroke();
    }
    if (mistakes > 6) {
        ctx.moveTo(260 + 50, 185 - 30);
        ctx.lineTo(250, 165);
        ctx.stroke();
    }

    //legs
    if (mistakes > 7) {
        ctx.moveTo(250, 249);
        ctx.lineTo(215, 300);
        ctx.stroke();
    }
    if (mistakes > 8) {
        ctx.moveTo(250, 249);
        ctx.lineTo(285, 298);
        ctx.stroke();
    }
}
};
