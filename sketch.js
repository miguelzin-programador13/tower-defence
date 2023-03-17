function preload(){
  caminho = loadImage("./imagerson/CAMINHOMAISINCRIVELDOMUNDO.png")
  //um = loadImage("./imagerson/inimigoFraco.gif")
  dois = loadImage("./imagerson/inimigoMedio.gif")
  tres = loadImage("./imagerson/inimigoForte.gif")
  SERGIO = loadImage("./imagerson/SERGIO.gif")
  atirador = loadImage("./imagerson/pistoleiro.gif")
  tacadordepedra = loadImage("./imagerson/OLendarioTacadorDePedras.gif")
  mente = loadImage("./imagerson/pensador.gif")
}

function setup() {
  createCanvas(800,400);
var cenario = createSprite(400, 200)
cenario.addImage(caminho)
Img1 = createImg("inimigoFraco.gif")
Img1.position(200,200)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
}
