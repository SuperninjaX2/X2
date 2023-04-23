// DRAWING ARCS & CIRCLES
var canvas = document.getElementById("cvs1");

 // Get the 2d context for this canvas
// Draw a semicircle
const cvs1= document.getElementById('cvs1');


let context = cvs1.getContext("2d")

context.fillStyle='rgba(33, 97, 181, 1)'
context.beginPath();

context.moveTo(0, 10); // Start drawing at 10, 120

context.lineTo(0, 180);
context.lineTo(110, 150);
context.fill()