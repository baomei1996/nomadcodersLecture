const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const color = document.getElementsByClassName('jsColor')
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const saveBtn = document.getElementById('jsSave');

const INITIAL_COLOR ="2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.strokeStyle = INITIAL_COLOR
ctx.lineWidth = 2.5;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)



let painting = false;
let filling = false;

function stopPainting () {
  painting = false;
}

function startPainting () {
  painting = true;
}

function onMouseMove (event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if(!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y)
    ctx.stroke();
  }
}

function handleCanvasClick () {
  if(filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
  }
}

function handleCanvasCM (event) {
  event.preventDefault();
}

if(canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', startPainting)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
  canvas.addEventListener('click', handleCanvasClick)
  canvas.addEventListener('contextmenu', handleCanvasCM)
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

Array.from(color).forEach(color => color.addEventListener('click', handleColorClick))

function handleRangeChange (event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick (event) {
  if(filling == true){
    filling = false;
    mode.innerText = 'FIll'
  } else {
    filling = true;
    mode.innerText = 'Paint'
  }
} 

function handleSaveClick () {
  const image = canvas.toDataURL()
  const link = document.createElement('a')
  link.href = image
  link.download = ' paintJS[🎨]'
  link.click();

}

if(range) {
  range.addEventListener('input', handleRangeChange)
}

if (mode) {
  mode.addEventListener('click', handleModeClick)
}

if (saveBtn) {
  saveBtn.addEventListener('click', handleSaveClick)
}