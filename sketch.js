//Create variables here
var database;
var dog,dogImage,dogImage1,food,foodImage,foodStock,foodRef;

function preload()
{
  //load images here
  
  dogImage = loadImage("images/Dog.png");
  dogImage1 = loadImage("images/happydog.png");
  foodImage = loadImage("images/Bone.png");
  
  

}

function setup() {
  createCanvas(480, 480);

  //Sprites

  food = createSprite(250,400,50,50);
  food.addImage(foodImage);
  food.scale = 0.3;


  dog = createSprite(400,150);
  dog.addImage(dogImage);
  dog.scale = 0.2;

  //Firebase
  database = firebase.database();

  //Reference for food
  foodRef = database.ref("Food");
  foodRef.on("value",read,console.log("error"));

  foodRef.set(20);


}


function draw() {  
  background(46,139,87);
  drawSprites();
  
  //add styles here
  textSize(20);
  fill("blue");
  text("Bones in the Stock: "+foodStock,50,300);
  text("press up arrow to feed the dog",10,20);
 // textSize(25);
  //text("Hi! Will you help me in doing some works ?",50,70)
  decreaseFood();
  if(foodStock===0){
    foodStock = 20;
  }

 

 
  
}

function read(data){
  foodStock = data.val();
}

function decreaseFood(){
  if(keyWentDown(UP_ARROW)){
  foodRef = database.ref("Food");
  foodStock = foodStock - 1;
  foodRef.set(foodStock);
  dog.addImage(dogImage1);
  food.x = 350;
  food.y = 200;
  food.scale = 0.1;

  }
  
  
}

