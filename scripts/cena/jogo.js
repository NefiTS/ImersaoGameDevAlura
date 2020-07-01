class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
    
  }
  setup() {
    cenario = new Cenario(imagemCenario, 3); // criando a segunda imagem
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial); // usar a vida dentro do jogo
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 50, 50, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 52, 52, 200, 150, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
    
    }
    keyPressed(key){
      if (key === 'ArrowUp'){
        personagem.pula();
        somDoPulo.play();
      }
  }
  draw() {
  cenario.exibe(); // chamando as funçoes exibe em ove
  cenario.move();
    
  vida.draw();
  pontuacao.exibe();
  pontuacao.adicionarPonto();
  
  personagem.exibe();
  personagem.aplicaGravidade();
  
  const linhaAtual = this.mapa[this.indice];
  const inimigo = inimigos[linhaAtual.inimigo]; // inimigo atual, que aparece um por vez
  const inimigoVisivel = inimigo.x < -inimigo.largura;// saber se o inimigo encosto o pe devolvendo true or false
  console.log(inimigoVisivel);
  inimigo.velocidade = linhaAtual.velocidade; // alternando a velocidade do inimigo
  
  // inimigoGrande.exibe();
  // inimigoGrande.move();
  // inimigoVoador.exibe();
  // inimigoVoador.move();
  // inimigo.exibe();
  // inimigo.move();
  
  // inimigos.forEach(inimigo => { // nao importa qual inimigo seja vai colidir
  inimigo.exibe()
  inimigo.move()
  
  if (inimigoVisivel) {
    this.indice++; // andar mais um passo
    inimigo.aparece()
    
    if(this.indice > this.mapa.length - 1) {
      this.indice = 0;
    }
  }
      
  if(personagem.estaColidindo(inimigo)) {
    vida.perdeVida();
    personagem.tornarInvencivel();
    if(vida.vidas === 0) {
      image(imagemGameOver, width / 2 - 200, height / 2.5);
      noLoop(); // parar o loop de colidir
    }
    }
// })
  }
}