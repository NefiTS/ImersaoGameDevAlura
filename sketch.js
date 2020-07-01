
function setup() {
  createCanvas(windowWidth, windowHeight); // colocando fullscreen
  
  frameRate(40); // padrao de frames
  somdoJogo.loop();// dando play na musica do jogo
  
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  
  cenas = { // objeto
    jogo, // instancia do nosso jogo 
    telaInicial // nao precisao por : e o mesmo na=ome
    
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2); // chamando e criando o botao
}

function keyPressed() { // observando e esperando o que foi digitado do teclado, fazendo validações com o key
  jogo.keyPressed(key);
}

function draw() {
  
//  cenas[cenaAtual].draw();
   jogo.draw();
  
//   if(cenaAtual === 'jogo'){
//     jogo.draw();
//   }
}


