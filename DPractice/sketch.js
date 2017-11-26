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

}

function draw(){


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
  button.style("background-color", "#696969");
  button.style("border","0px");
}

function basicbuttona(x,y,z,a,b){ //x=x y=y z=name of button  a = function name you want to have happen b= second funciton
  button = createButton(z);
  button.position(x, y);
  button.style("background-color", "#696969");
  button.style("border","0px");
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
backroundinfocontent();

}

function learningaboutimplantsF(){ //controls what happens when learning about implants is pressed
removeElements();
nearondiagram();
learningaboutimplantstext();
learningaboutimplantscontent();
basicbuttona(50,50,"home page",cthing, home);
basicbutton(100,150,"fire neuron", animation);
basicbutton(235,150,"deactivate neuron", deactivateneuron);

}

function thefuture(){ // controls what happens when button "the future" is pressed
removeElements();
Imge(0,0,'thefutureimg.jpg', windowWidth, windowHeight);
thefuturecontent();
basicbutton(100,100,"home page", home);
thefuturetext();
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

function thefuturetext(){
  var myDiv = createDiv("The Future of Brain Implants and VR");
  myDiv.style("position", 15, 5);
  //myDiv.style("rotate", 45);
  myDiv.style("color", "#696969");
  myDiv.style("font-size","55px");

}

function backroundinfocontent(){
  var myDiv = createDiv("Virtual Reality is a system which allows a human, or multiple humans, to interact with a virtual world. The user of the virtual reality system uses their body to move throughout and interact with the virtual environment. The most successful virtual reality systems are capable of making the user feel as though they are truly present in the virtual world, with all their senses being artificially stimulated to trick the brain into believing the body is present in the virtual world. The virtual environment must be updated everytime the user moves, so initially virtual reality machines were very expensive and only used in high budget projects. However, the cost of virtual reality machines has dropped significantly and has been applied to other fields, like gaming. A traditional VR setup uses a headset to show the user the virtual world and hand controllers or gloves to allow the user to interact with the virtual world. Motion sensors are also utilized to allow the user to move around in the virtual world.");
  myDiv.style("position", 15, 200);
  //myDiv.style("rotate", 45);
  myDiv.style("color", "#F8F8FF");
  myDiv.style("font-size","14px");

}

function learningaboutimplantscontent(){
  var myDiv = createDiv("Brain implants work by tracking individual neuron action and using the activation of a neuron as a command to perform a function. A brain implant must be programmed for which neurons trigger specific motions, something that a human must do by experimenting on which neurons control specific actions. Brain implants work by using very small wires that are inserted into the brain. These wires are very sensitive and can sense the activation and deactivation of neurons. ");
  myDiv.style("position", 510, 100);
  //myDiv.style("rotate", 45);
  myDiv.style("color", "#F8F8FF");
  myDiv.style("font-size","14px");

}

function thefuturecontent(){
  var myDiv = createDiv("The future will bring brain implants and VR together. Brain implants will be able to not only respond to the users’ commands but stimulate the neurons as well to create a completely immersive VR experience. The result will be an environment where the user simply uses their mind to interact with the virtual world.");
  myDiv.style("position", 50, 200);
  //myDiv.style("rotate", 45);
  myDiv.style("color", "#696969");
  myDiv.style("font-size","20px");

}


function presetup(){
  createCanvas(windowWidth, windowHeight);
  background(100);
  basicbuttona(windowWidth/2, windowHeight/2,"Brain Implants and VR Web App",cthing, home);
  var myDiv = createDiv("CLICK THE BUTTON!!!");
  myDiv.style("position", 50, 200);
  //myDiv.style("rotate", 45);
  myDiv.style("color", "#F8F8FF");
  myDiv.style("font-size","70px");

}

