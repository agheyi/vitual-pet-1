var dog, happyDog, database, foodS, foodStock, happyDogImg, dogImg;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on('value', readStock);

  dog = createSprite(250, 250);
  dog.addImage("dog", dogImg)
}


function draw() {  
  background(49, 139, 87);
  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();


}



