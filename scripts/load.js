function preload(){
  imagemCenario = loadImage('imagens/cenario/castelo.gif');// buscando a imagem
  imagemGameOver = loadImage('imagens/assets/game-over.png');// buscando a imagem
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');// buscando a imagem
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');// buscando a imagem
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');// buscando a imagem
  imagemTelaInicial = loadImage('imagens/cenario/tela.jpg');// buscando a imagem
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');// buscando a fonte
  imagemVida = loadImage('imagens/assets/coracao.png');// buscando a fonte
  fita = loadJSON('fita/fitas.json')// buscando a fonte
  
  
  somdoJogo = loadSound('sons/earth-track-01.mp3'); // pegando o som do jogo
  somDoPulo = loadSound('sons/somPulo.mp3'); // pegando o som do pulo
}