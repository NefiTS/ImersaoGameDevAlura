class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) // passando elas para super
    // this.imagem = imagem; // recebendo do constructor
    // this.frameAtual = 0; // frame que se inicia
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura  - 30; // sempre que a hippster sair do chao ter um valor base para voltar
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo =  - 50;
    this.pulos = 0;
    this.invencivel = false
  }
  pula(){
    if(this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos ++;
    } 
  }
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yInicial) {
      this.y = this.yInicial; // cair no chao e nao deixar cair para sempre
      this.pulos = 0;
    }
    
  }
  
  tornarInvencivel () {
    this.invencivel = true
    setTimeout( () => {
      this.invencivel = false
    }, 1000) // segundos
  }
  
  estaColidindo(inimigo) {
    if(this.invencivel) {
      return false
    }
    const precisao = .7
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
      
    )
    return colisao;
    
  }
//   exibe(){
//     image(this.imagem, 0, height - 135, 110, 135, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 220, 270); // ir no zero zero e pegar o que tem la, os outros dois parametros são quantos pixels
    
//     this.anima();
//   }
}