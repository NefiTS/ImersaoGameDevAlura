class Pontuacao {
  constructor(){
    this.pontos = 0;
  }
  exibe() {
    textAlign(RIGHT);
    fill('#fff');
    textSize (50); // tamanho do texto
    text(parseInt(this.pontos), width - 30, 50)// texto de pontos
  }
  adicionarPonto(){
    this.pontos = this.pontos + 0.2;
  }
}