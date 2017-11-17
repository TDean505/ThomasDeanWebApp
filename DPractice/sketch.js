var xyz;
var img;
var button;
var canvas;
var diagram = { //object for animation
  x: 200,
  y: 200,
  z: 200,
}


function setup() {
presetup();
//home();
 // this is the home of the websight, takes back to start portal
}

function draw(){

//home();
}
function home(){ // this is where you add things to the first page. will allow user to naviagate back to default
  removeElements();
  Imge(0,0, 'coverbrain.jpg', windowWidth, windowHeight);
  //xyz.position(100,100);
  basicbutton(120,150,"backround information",backroundinformationF);
  basicbutton(120,250,"learning about implants and VR",learningaboutimplantsF);
  basicbutton(120,350, "the future",thefuture);
  frontpagetext();
}

function basicbutton(x,y,z,a){ //x=x y=y z=name of button  a = function name you want to have happen
  button = createButton(z);
  button.position(x, y);
  button.mousePressed(a); //use this comant for function actions for button
}

function basicbuttona(x,y,z,a,b){ //x=x y=y z=name of button  a = function name you want to have happen b= second funciton
  button = createButton(z);
  button.position(x, y);
  button.mousePressed(a);
  button.mousePressed(b);
}

function Imge(x,y,z,a,b){ // x=x y=y, z= img name, a= imige width b=immage height
var img = createImg(z,x,y);
img.size(a,b);
} // x= x y=y z= picture name in folder

function backroundinformationF(){ //for backround information page, make modifications in this function
removeElements();
Imge(0,0,'backroundinfoa.jpg',windowWidth, windowHeight);
backgroundinfotext();
basicbutton(50,100,"home page", home);

}

function learningaboutimplantsF(){ //controls what happens when learning about implants is pressed
removeElements();
nearondiagram();
learningaboutimplantstext();
basicbuttona(50,50,"home page",cthing, home);
basicbutton(100,150,"fire neuron", animation);
basicbutton(235,150,"deactivate neuron", deactivateneuron);

}

function thefuture(){ // controls what happens when button "the future" is pressed
removeElements();
Imge(0,0,'thefutureimg.jpg', windowWidth, windowHeight);
basicbutton(100,50,"home page", home);
}

function frontpagetext(){ // title text for front page
  var myDiv = createDiv("Brain Implants and VR.");
  myDiv.style("position", 50, 15);
  //myDiv.style("rotate", 45);
  myDiv.style("color", "#F8F8FF");
  myDiv.style("font-size","75px");
}

function nearondiagram(){ //animation for diagram
var canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
background(100);
noStroke();
animationsetup();
//animation();
}


function cthing(){ // no canvas, clear canvas
noCanvas();
}

function animationsetup() {
  ellipse(diagram.x,diagram.y,200,50); //the basic shapes for animation
  ellipse(diagram.x,diagram.y+100,200,50);
  rect(diagram.x-27,diagram.y-180,60,200);
  rect(diagram.x-27,300,60,200);
  rect(diagram.x+200,diagram.y+5,100,100);
  rect(diagram.x+130,diagram.y+5,170,10);
  rect(diagram.x+130,diagram.y+30,170,10);
  rect(diagram.x+130,diagram.y+55,170,10);
  var myDiv= createDiv("Brain Implant"); //brain implant text //use animate.css to animate text
  myDiv.style("position", 405, 250);
  myDiv.style("color","#000000");
  myDiv.style("fond-size","20px");
}

function animation(){ // runs the "animation" this is what happens when the button "fire neurons" is clicked
//for (i=0; i<25; i++) {
  //diagram.z = diagram.z + 1;
  //background(200);
  fill(255,0,0);
  ellipse(diagram.x-60,diagram.z+35,20);
  ellipse(diagram.x-60,diagram.z+65,20);
  rect(330,215,14,14);
  fill(0,0,255);
  ellipse(diagram.x-20,diagram.z+35,20);
  ellipse(diagram.x-20,diagram.z+65,20);
  rect(330,240,14,14);
  fill(255,0,0);
  ellipse(diagram.x+20,diagram.z+35,20);
  ellipse(diagram.x+20,diagram.z+65,20);
  fill(0,0,255);
  ellipse(diagram.x+60,diagram.z+35,20);
  ellipse(diagram.x+60,diagram.z+65,20);
  fill(255,255,255);
  //animationsetup();
  //}
}

function deactivateneuron(){  // resets animation page to defalult place
  background(100);
  ellipse(diagram.x,diagram.y,200,50); //the basic shapes for animation
  ellipse(diagram.x,diagram.y+100,200,50);
  rect(diagram.x-27,diagram.y-180,60,200);
  rect(diagram.x-27,300,60,200);
  rect(diagram.x+200,diagram.y+5,100,100);
  rect(diagram.x+130,diagram.y+5,170,10);
  rect(diagram.x+130,diagram.y+30,170,10);
  rect(diagram.x+130,diagram.y+55,170,10);
  var myDiv= createDiv("Brain Implant"); //brain implant text //use animate.css to animate text
  myDiv.style("position", 405, 250);
  myDiv.style("color","#000000");
  myDiv.style("fond-size","20px");

}

function learningaboutimplantstext(){ //learning about implants title
  var myDiv = createDiv("Learning About Implants");
  myDiv.style("position", 240, 15);
  //myDiv.style("rotate", 45);
  myDiv.style("color", "#F8F8FF");
  myDiv.style("font-size","55px");
}

function backgroundinfotext(){ //backround info title
  var myDiv = createDiv("Background on Brain Implants and VR");
  myDiv.style("position", 15, 15);
  //myDiv.style("rotate", 45);
  myDiv.style("color", "#F8F8FF");
  myDiv.style("font-size","55px");
}

function presetup(){
  createCanvas(windowWidth, windowHeight);
  background(100);
  basicbuttona(windowWidth/2, windowHeight/2,"Brain Implants and VR Web App",cthing, home);

}
