//Variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//Velocidade da bolinha
let VelocidadeXBolinha = 6;
let VelocidadeYBolinha = 6;

//Variaveis da raquete
let xRaquete = 1;
let yRaquete = 150;
let RaqueteComprimento = 10;
let RaqueteAltura = 90;

//Linha central
let LinhaCentralLargura = 5
let LinhaCentralAltura = 400
let xLinhaCentral = 300
let yLinhaCentral = 0

//Variaveis do oponente
let xRaqueteOponente = 589;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//Placar do jogo
let MeusPontos = 0
let PontosOponente = 0

//Sons do Jogo
let Raquetada;
let Ponto;
let Trilha;

let colidiu = false;

function setup(){
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
 
  background ("DarkCyan");
  mostraBolinha();
  movimentaBolinha();
  colisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaqueteJogadorCima();
  movimentaRaqueteJogadorBaixo();
  ColisaoRaquete();
  VerificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponenteCima();
  movimentaRaqueteOponenteBaixo();
  VerificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  IncluiPlacar();
  MarcaPonto();
  MostraLinhaCentral();
}

function mostraBolinha (){
      circle (xBolinha, yBolinha, diametro);
}

function movimentaBolinha (){
  xBolinha += VelocidadeXBolinha;
  yBolinha += VelocidadeYBolinha;
}

function colisaoBorda(){
 if (xBolinha + raio > width ||
  xBolinha - raio < 0)
  VelocidadeXBolinha *= -1
  
 if (yBolinha + raio > height ||
  yBolinha - raio < 0)
  VelocidadeYBolinha *= -1
  }

function mostraRaquete(x,y){
  fill (color(159, 0, 0))
  rect(x, y,RaqueteComprimento, RaqueteAltura);
}

function MostraLinhaCentral(){
  fill (color(255, 255, 255))
  rect(xLinhaCentral,yLinhaCentral, LinhaCentralLargura, LinhaCentralAltura);
}

function movimentaRaqueteJogadorCima(){
    if (keyIsDown(UP_ARROW))
      yRaquete -= 10;
}
function movimentaRaqueteJogadorBaixo(){
     if (keyIsDown(DOWN_ARROW))
    yRaquete += 10;
  }

function ColisaoRaquete(){
    if (xBolinha - raio < xRaquete + RaqueteComprimento && yBolinha - raio < yRaquete + RaqueteAltura && yBolinha + raio > yRaquete){
      VelocidadeXBolinha *= -1;
      raquetada.play();
 }
}

function VerificaColisaoRaquete(x, y){
  Colidiu = collideRectCircle(x, y, RaqueteComprimento, RaqueteAltura, xBolinha, yBolinha, raio);
  if (Colidiu){
    VelocidadeXBolinha *= -1
    raquetada.play();
  }
}

function movimentaRaqueteOponenteCima(){
    if (keyIsDown(87))
      yRaqueteOponente -= 10;
}
function movimentaRaqueteOponenteBaixo(){
    if (keyIsDown(83))
      yRaqueteOponente += 10;
}
  
  function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}

function IncluiPlacar(){
  stroke (255)
  textAlign (CENTER)
  textSize (16)
  fill (color(255, 140, 0))
  rect (130, 10, 40, 20);
  fill (255)
  text (MeusPontos, 150, 26);
  fill (color(255, 140, 0))
  rect (450, 10, 40, 20)
  fill (255)
  text (PontosOponente, 470, 26);
}

function MarcaPonto(){
  if(xBolinha >590){
    MeusPontos += 1
    ponto.play();
  }
  if(xBolinha < 10){
    PontosOponente +=1
    ponto.play();
  }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3")
  
  function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0)
    xBolinha = 23
}
}