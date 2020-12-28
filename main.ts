// let a: number; 
// let b: boolean; 
// let c: string; 
// let d: any; 
// let e: number[] = [1, 2, 3]; 
// let f: any[] = [1, true, 2, false];

// enum Color {Red, Blue, Green=5};
// console.log(Color.Green)

// let str;
// str = "STRING";
// console.log((<string>str).length);
// console.log((str as string).length);

// interface Point {
//     x: number,
//     y: number,
//     draw: () => void
// }
// let drawPoint = (point: Point) => {
//     console.log("point: ", point);
// }
// drawPoint({x: 1, y: 2});

class Point {
    x: number;
    y: number;
    // ? will make x optional parameter
    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }
    draw(){
        console.log("X: "+ this.x +" "+ "Y: "+ this.y);
    }
}
let point = new Point();
// point.x = 1;
// point.y = 2;
point.draw();