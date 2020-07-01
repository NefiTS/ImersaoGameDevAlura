class Animacao { 
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    this.matriz = matriz;
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x // posiçao x da imagem que vai selecionar, indice da matriz
    this.variacaoY = variacaoY;
    this.y = height - this.altura - variacaoY; // altura do personagem na tela
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    
    this.frameAtual = 0;// matriz para selecionar animações
    
  }
  
  exibe(){
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite); // ir no zero zero e pegar o que tem la, os outros dois parametros são quantos pixels, image serve para colocara  imagem no canvas
    this.anima();
  
  }
  
  anima(){
    this.frameAtual ++;
    
    if(this.frameAtual >= this.matriz.length -1){// ir ate a ultima imagem e voltar para o 0
      this.frameAtual = 0;
    }
  }
}