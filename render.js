function populate_catalog(num_of_arrays){
    let collection = []
    for (let i=0;i<num_of_arrays;i++){
        const arr = []

        collection[i]=calculateCollatz(i)
    }
    return collection
}

function calculateCollatz(n) {
    arr.push(n%2)
    if (n <= 1){
        return arr
    }else if (!(n%2)){
        return calculateCollatz(n/2)
    }else{
        return calculateCollatz(n*3+1)
    }
}


const canvas = document.querySelector(".myCanvas");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const xOrgin = width/2
const yOrgin = height

const ctx = canvas.getContext("2d");
const arr = [
  1, 0, 1, 0,
  0, 0, 0, 1
]
// import { catalog } from "./collatz";
// const catalog = require('./collatz')
const catalog = [
  [ 0 ],
  [ 1 ],
  [ 0, 1 ],
  [
    1, 0, 1, 0,
    0, 0, 0, 1
  ],
  [ 0, 0, 1 ],
  [ 1, 0, 0, 0, 0, 1 ],
  [
    0, 1, 0, 1, 0,
    0, 0, 0, 1
  ],
  [
    1, 0, 1, 0, 1, 0, 0,
    1, 0, 0, 0, 1, 0, 0,
    0, 0, 1
  ],
  [ 0, 0, 0, 1 ],
  [
    1, 0, 0, 1, 0, 1, 0,
    1, 0, 0, 1, 0, 0, 0,
    1, 0, 0, 0, 0, 1
  ],
  [
    0, 1, 0, 0,
    0, 0, 1
  ],
  [
    1, 0, 1, 0, 0, 1,
    0, 0, 0, 1, 0, 0,
    0, 0, 1
  ],
  [
    0, 0, 1, 0, 1,
    0, 0, 0, 0, 1
  ],
  [
    1, 0, 0, 0, 1,
    0, 0, 0, 0, 1
  ],
  [
    0, 1, 0, 1, 0, 1, 0,
    0, 1, 0, 0, 0, 1, 0,
    0, 0, 0, 1
  ],
  [
    1, 0, 1, 0, 1, 0, 1,
    0, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 1
  ],
  [ 0, 0, 0, 0, 1 ],
  [
    1, 0, 0, 1, 0, 0,
    0, 1, 0, 0, 0, 0,
    1
  ],
  [
    0, 1, 0, 0, 1, 0, 1,
    0, 1, 0, 0, 1, 0, 0,
    0, 1, 0, 0, 0, 0, 1
  ],
  [
    1, 0, 1, 0, 0, 0, 1,
    0, 1, 0, 0, 1, 0, 0,
    0, 1, 0, 0, 0, 0, 1
  ],
  [
    0, 0, 1, 0,
    0, 0, 0, 1
  ],
  [
    1, 0, 0, 0,
    0, 0, 0, 1
  ],
  [
    0, 1, 0, 1, 0, 0,
    1, 0, 0, 0, 1, 0,
    0, 0, 0, 1
  ],
  [
    1, 0, 1, 0, 1, 0,
    0, 0, 0, 0, 1, 0,
    0, 0, 0, 1
  ],
  [
    0, 0, 0, 1, 0,
    1, 0, 0, 0, 0,
    1
  ],
  [
    1, 0, 0, 1, 0, 1, 0, 0,
    0, 1, 0, 1, 0, 0, 1, 0,
    0, 0, 1, 0, 0, 0, 0, 1
  ],
  [
    0, 1, 0, 0, 0,
    1, 0, 0, 0, 0,
    1
  ],
  [
    0, 0, 1, 0, 1, 0, 1,
    0, 0, 1, 0, 0, 0, 1,
    0, 0, 0, 0, 1
  ],
  [
    1, 0, 0, 0, 1, 0, 1,
    0, 0, 1, 0, 0, 0, 1,
    0, 0, 0, 0, 1
  ],
  [
    0, 1, 0, 1, 0, 1, 0,
    1, 0, 0, 0, 0, 0, 1,
    0, 0, 0, 0, 1
  ],
  [ 0, 0, 0, 0, 0, 1 ],
  [
    1, 0, 0, 1, 0, 0, 1, 0,
    1, 0, 0, 0, 1, 0, 1, 0,
    0, 1, 0, 0, 0, 1, 0, 0,
    0, 0, 1
  ],
  [
    0, 1, 0, 0, 1, 0,
    0, 0, 1, 0, 0, 0,
    0, 1
  ],
  [
    1, 0, 1, 0, 0, 0,
    0, 0, 1, 0, 0, 0,
    0, 1
  ],
  [
    0, 0, 1, 0, 0, 1, 0,
    1, 0, 1, 0, 0, 1, 0,
    0, 0, 1, 0, 0, 0, 0,
    1
  ],
  [
    1, 0, 0, 0, 0, 1, 0,
    1, 0, 1, 0, 0, 1, 0,
    0, 0, 1, 0, 0, 0, 0,
    1
  ],
  [
    0, 1, 0, 1, 0, 0, 0,
    1, 0, 1, 0, 0, 1, 0,
    0, 0, 1, 0, 0, 0, 0,
    1
  ],
  [
    1, 0, 1, 0, 1, 0, 0, 1, 0,
    1, 0, 0, 0, 0, 1, 0, 1, 0,
    0, 0, 1, 0, 1, 0, 0, 1, 0,
    0, 0, 1, 0, 0, 0, 0, 1
  ]
]
function renderBackground(){
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, width, height);
}
function renderSegment(x1,y1,x2,y2){

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    console.log(x1,y1,x2,y2)

}

function renderLine(arr){
    // // set line style

    // // ctx.strokeStyle = 'red';
    // // ctx.lineWidth = 2;

    // function getX2(x1,direction){
    //     return direction ? (x1 - 19.5) : (x1 + 19.5)
    // }
    // function getY2(y1){
    //     return y1-22.8
    // }

    // // // draw a red line
    // for (let i = 0;i<arr.length;i++){
    //     if (i==0){
    //         x1=xOrgin
    //         y1=yOrgin
    //     }else{
    //         x1=oldX
    //         y1=oldY
    //     }
    //     x2=getX2(x1,arr[i])
    //     y2=getY2(x1,arr[i])
    //     oldX=x2
    //     oldY=y2


    // renderSegment(x1,y1,x2,y2)
    // }
    function getX2(x1,direction){
        return direction ? (x1 - 19.5) : (x1 + 19.5)
    }
    function getY2(y1){
        return y1-20.8
    }

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    let x1=xOrgin
    let y1=yOrgin
    let x2=getX2(x1,arr[0])
    let y2=getY2(y1)
    let oldX=x2
    let oldY=y2
    renderSegment(x1,y1,x2,y2)

    for(let i=1;i<arr.length;i++){
        x1=oldX
        y1=oldY
        x2=getX2(x1,arr[i])
        y2=getY2(y1)
        renderSegment(x1,y1,x2,y2)
        oldX=x2
        oldY=y2
    }
    }



// driver code
let num_of_areas = 1
// const catalog = populate_catalog(num_of_areas)
renderBackground()
for (i=0;i<catalog.length;i++){
    renderLine(catalog[i])

}
