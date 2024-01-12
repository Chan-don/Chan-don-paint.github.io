const modeBtn = document.getElementById("mode-button");
const remover = document.getElementById("remove");
const eraser = document.getElementById("eraser")
const colorOptions = Array.from(document.getElementsByClassName("color-option")); // Why use Array from? This is prevent 'html collection' come in JS at the html. Just we want make Js array.
const color = document.getElementById("color-change");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

function onMove(event) {
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

function onMouseDown(){
    isPainting = true;
}

function onMouseUp(){
    isPainting = false;
    ctx.beginPath(); //if you want to play next cord. you must insert this cord in front of you want play cord. this cord is separate front cord and then cord.
}

function onMouseLeave() {
    isPainting = false;
}

function onLineWidthChange (event) {
    ctx.lineWidth = event.target.value;
}

function onColorChange (event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}
// this cord is show If you clicked color. Console show your clicked data (event.target.dataset.color).

function onModeclick() {
    if(isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";

    } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}

function onCanvasClick() {
    if(isFilling){
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}
// this cord is fill the canvas. if you want to change canvas size. you also change (0, 0, X, Y).

function canvasRemove (){
    ctx.fillStyle = "tan";
    ctx.fillRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick () {
    ctx.strokeStyle = "tan";
    isFilling = false;
    modeBtn.innerText = "Fill";
}
// Remover and Eraser is basic curriculum is paint the same background-color. 

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", onMouseLeave);

canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeclick);
remover.addEventListener("click", canvasRemove);
eraser.addEventListener("click", onEraserClick);