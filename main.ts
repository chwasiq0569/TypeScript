let a: number; 
let b: boolean; 
let c: string; 
let d: any; 
let e: number[] = [1, 2, 3]; 
let f: any[] = [1, true, 2, false];

enum Color {Red, Blue, Green=5};
console.log(Color.Green)

let str;
str = "STRING";
console.log((<string>str).length);
console.log((str as string).length);

interface Point {
    x: number,
    y: number
}
let drawPoint = (point: Point) => {
    console.log("point: ", point);
}
drawPoint({x: 1, y: 2});
