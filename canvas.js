var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;
var c = canvas.getContext('2d');
// c.fillStyle="pink";
// c.fillRect(50,20,100,100);
// c.fillStyle="maroon";
// c.fillRect(300,20,100,100);
// c.fillStyle="blue";
// c.fillRect(900,20,100,100);
// c.fillStyle="black";
// c.fillRect(700,20,100,100);
//Lines
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = "Red"
// c.stroke();
// console.log("Hello Conavas",canvas);
//Arc & Circle
// c.beginPath();
// c.arc(300,300,30,0,Math.PI*2,false);
// c.stroke();
//Animation For Circle
var x=300;
var dx=4;
var y=300;
var dy=4;
var raduis =30;
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    c.beginPath();
    c.arc(x,y,raduis,0,Math.PI*2,false);
    c.stroke();
    if(x+raduis>innerWidth || x-raduis <0){
        dx=-dx;
    }
    if(y+raduis>innerHeight || y-raduis<0){
        dy=-dy;
    }
    x += dx;
    y +=dy;
}
animate();