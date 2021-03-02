// Each time this function is called a GameObject
// is create based on the arguments
// In JavaScript you can consider everything an Object
// including functions
var canvas = document.getElementById("game");


var context = canvas.getContext("2d");

 
var pageURL=document.location.href;
var gamerTag;

function splitFunction() {
    
    var result = pageURL.split("=");
    gamerTag = result[1];
  }
splitFunction();
var string1 = "username: ";
var string2 = gamerTag;
var username = string1.concat(string2);
context.font="10 px Arial";

        

var image = new Image();
image.src = "./jpg/spritestickmen.png";
var npcimage= new Image();
npcimage.src="./jpg/ghost.png";
function GameObject(name, img, health) {
    this.name = name;
    this.img = img;
    this.health = health;
    this.x = 0;
    this.y = 0;
}

// The GamerInput is an Object that holds the Current
// GamerInput (Left, Right, Up, Down)
function GamerInput(input) {
    this.action = input;
}

// Default GamerInput is set to None
var gamerInput = new GamerInput("None"); 

// Gameobjects is a collection of the Actors within the game
var player = new GameObject("Player", "./jpg/spritestickmen.png", 100);

var gameobjects = [player, new GameObject("npc", "./jpg/ghost.png", 100)];
gameobjects[1].x=400;
gameobjects[1].y=400;
// Process keyboard input event
function input(event) {
    // Take Input from the Player
    

    if (event.type === "keydown") {
        switch (event.keyCode) {
            case 37:
                gamerInput = new GamerInput("Left");
                break; //Left key
            case 38:
                gamerInput = new GamerInput("Up");
                break; //Up key
            case 39:
                gamerInput = new GamerInput("Right");
                break; //Right key
            case 40:
                gamerInput = new GamerInput("Down");
                break; //Down key
            default:
                gamerInput = new GamerInput("None"); //No Input
        }
    } else {
        gamerInput = new GamerInput("None"); //No Input
    }
    
}

function update() {

    

        if (gamerInput.action === "Up") {
            gameobjects[0].y -= 3;
            console.log("Up");
        }
  

        if (gamerInput.action === "Down") {
                gameobjects[0].y += 3;
                console.log("Down");
            }
         if (gamerInput.action === "Left") {
                gameobjects[0].x -= 3;
                console.log("Left");
            }
         if (gamerInput.action === "Right") {
                gameobjects[0].x += 3;
                console.log("Right");
            }
            
            
            

        
    
}
var x = 0,
    y = 1300;
   


function draw() {
    
    for (i = 0; i < gameobjects.length; i++) {
        if (gameobjects[i].health > 0) {
           
        }
    }
    if (x < (200 + (image.width / 2))) 
    {
        x += 20;
    }
    context.drawImage(npcimage,gameobjects[1].x,gameobjects[1].y);

   
    
    animate();
    context.fillText(username,700,20);
}
var frames = 6;


var currentFrame = 0;


var sprite = new Image();
sprite.src = "./jpg/spritestickmen.png";






var initial = new Date().getTime();
var current; 
function animate() {
    current = new Date().getTime(); 
    if (current - initial >= 500) 
    { 
        currentFrame = (currentFrame + 1) % frames; 
        initial = current;
    } 

    
    context.drawImage(sprite, (sprite.width / 6) * currentFrame, 0, 100, 100, gameobjects[0].x, gameobjects[0].y, 100, 100);

 
}

function gameloop() {
    update();
    draw();
    window.requestAnimationFrame(gameloop);
}

// Handle Active Browser Tag Animation
window.requestAnimationFrame(gameloop);

// Handle Keypressed
window.addEventListener('keyup', input);
window.addEventListener('keydown', input);

function buttonUP()
{
    console.log("Up");
    gameobjects[0].y -= 5;
}
function buttonDOWN()
{
    console.log("Down");
    gameobjects[0].y += 5;
}
function buttonRIGHT()
{
    console.log("Right");
    gameobjects[0].x += 5;
}
function buttonLEFT()
{
    console.log("Left");
    gameobjects[0].x -= 5;
}
function weaponSelection() {
    var selection = document.getElementById("equipment").value;
    var active = document.getElementById("active");
    if (active.checked == true) {
      document.getElementById("HUD").innerHTML = selection + " active ";
      console.log("Weapon Active");
    } else {
      document.getElementById("HUD").innerHTML = selection + " selected ";
      console.log("Weapon Selected");
    }
  }
  // Array of Weapon Options
var options = [{
    "text": "Select a Weapon",
    "value": "No Weapon",
    "selected": true
  },
  {
    "text": "Spear",
    "value": "Javelin"
  },
  {
    "text": "Sword",
    "value": "Longsword"
  },
  {
    "text": "Crossbow",
    "value": "Pistol crossbow"
  }
];
