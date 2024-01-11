const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
];
const colors2 = [
    "#32ff7e",
    "#7efff5",
    "#18dcff",
    "#7d5fff",
];

function ifMove(event) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

function ifMove2(event) {
    ctx.beginPath();
    ctx.moveTo(800, 800);
    const color = colors2[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}



canvas.addEventListener("mousemove", ifMove);
canvas.addEventListener("mousemove", ifMove2);