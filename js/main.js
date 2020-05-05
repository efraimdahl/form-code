let yPos = 0
let i = 0
let arr = []


class Shell {
  constructor(rootx,rooty,strength,speedx,speedy) {
    this.rootx = rootx;
    this.rooty = rooty;
    this.strength = strength;
    this.curx = rootx;
    this.cury = rooty;
    this.speedy = speedy;
    this.speedx = speedx;
    this.notExploded = true;
  }
}


function setup() {
  createCanvas(innerWidth, innerHeight)
}


function shootBalls(x,y,lvl,xspeed,yspeed){
  
  arr.push(new Shell(x,y,lvl,xspeed,yspeed));
}


function updateShell(s){
  s.curx += s.speedx;
  s.cury += s.speedy;
  switch(s.strength){
    case 6: 
        stroke(102,0,0);
        strokeWeight(6);
        break;   
    case 5:
        stroke(255, 0, 0);
        strokeWeight(5);
        break;   

    case 4:
        stroke(255, 50, 0);
        strokeWeight(4);
        break;   

    case 3:
        stroke(255, 100, 0);
        strokeWeight(3);
        break;   

    case 2:
        stroke(255, 150, 0);
        strokeWeight(2);
        break;   

    case 1:
        stroke(255, 204, 0);
        strokeWeight(1);
        break;   
  }
  if(s.bending){
    s.speedx = s.speedx + s.curving;
    s.speedy = s.speedy+ s.curving;s.o
  }
  //ellipse(s.curx,s.cury,10,10);
  line(s.rootx,s.rooty,s.curx,s.cury);

  let explode = random(0,120);
  if(explode > 119){
    s.notExploded = false;
    if(s.strength > 1){
      exstrenth = random(1,10)
      triangle(s.curx, s.cury,random(0,width), random(0,height), s.rootx, s.rooty)
      shootBalls(s.curx,s.cury,s.strength-1,random(-1,1)*exstrenth,random(-1,1)*exstrenth)
      shootBalls(s.curx,s.cury,s.strength-1,random(-1,1)*exstrenth,random(-1,1)*exstrenth)
      shootBalls(s.curx,s.cury,s.strength-1,random(-1,1)*exstrenth,random(-1,1)*exstrenth)
    }  
  }
}

function inrange(s){
  return (s.cury > 0 && s.cury < height && s.curx > 0 && s.curx < width && s.notExploded)
}
function draw(){
  i += 0.2
  background(0,0,0,20);
  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = height;
  }
  let x = sin(i*0.3) * (width/2 - 20)
  let y = cos(i*0.7) * 50
  let sht = random(1,10);
  //randomly add shells to an array
  //ellipse(x+width/2,y+height/2, 20, 20);
  if(sht > 8){
    let yspeed = random(-5,5)
    let xspeed = random(-2,2)
    let lvl = Math.ceil(random(3,6))
    shootBalls(x+width/2,y+height/2,lvl,xspeed,yspeed)
  }
  //update the shells, then remove those that are no longer in range of the canvas
  arr.forEach(s => updateShell(s));
  arr = arr.filter(s => inrange(s))
}




