class BotaoGerenciador {
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = createButton(this.texto); // criando botao
    this.botao.mousePressed( ()=> this._alteraCena() ); // tirando o botao do meio do jogo
    this.botao.addClass(' botao-tela-inicial');
    
  }
    draw () {
      this.botao.position(this.x, this.y); // chamando e criando a posição
      
      this.botao.center('horizontal'); // passando sem argumentos centraliza no meio certo
      
    }
    _alteraCena() {
      this.botao.remove();
      cenaAtual = 'jogo';
    }
}