let setColor = "dotPink";

var drawingBoard = document.getElementById("drawingBoard");
drawingBoard.addEventListener("click", function (event) {
  var dot = document.createElement("div");

  dot.className = setColor;
  dot.style.left = event.pageX - 4 + "px";
  dot.style.top = event.pageY - 4 + "px";
  drawingBoard.appendChild(dot);
  console.log(dot.parentElement);
});

function colorChange(newColor) {
  setColor = newColor;
}

var mybutton = document.querySelector("button");
mybutton.addEventListener("click", function (event) {
  var drawingBoard = document.getElementById("drawingBoard");

  while (drawingBoard.childElementCount > 0) {
    drawingBoard.removeChild(drawingBoard.lastChild);
  }
  event.stopPropagation();
});

// create element, give it a parameter that the code slips in
// on click, set the chosen color/className to dotPink, etc.
