class Inimigo extends Animacao { // tudo que temos na classe animação vamos ter na classe inimigo tambem faz parte dessa classe
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {// instanciar
  
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) // passando elas para super
    
    this.velocidade = velocidade; // velocidade da gotinha
    this.x = width;
  }
  move(){
    this.x = this.x - this.velocidade; // criando movimento com o inimigo
    
    // if(this.x < -this.largura){ // fazendo ele passar de novo na tela
    //   this.x = width;
    //}
  }
  aparece () {
    this.x = width
  }
}