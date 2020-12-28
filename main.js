var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 2, false];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 5] = "Green";
})(Color || (Color = {}));
;
console.log(Color.Green);
var str;
str = "STRING";
console.log(str.length);
console.log(str.length);
var drawPoint = function (point) {
    //
    console.log("point: ", point);
};
drawPoint({ x: 1, y: 2 });
