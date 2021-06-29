class ProdutoController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._listaProdutos = new Bind(
      new ListaProdutos(),
      new ProdutosView($("#produtosView")),
      "adiciona", "filtro"
    );

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($("#mensagemView")),
      "texto"
    );

    this.carregaProdutos();
  }

  filtra(event) {
    this._listaProdutos.filtro = event.target.value;
  }

  carregaProdutos() {
    let service = new ProdutoService();
    service
      .obterProdutos()
      .then((produtos) =>
        produtos
          .forEach((produto) => {
            console.log(produto);
            this._listaProdutos.adiciona(produto);
            console.log("Produtos carregados com sucesso!");
          })
      )
      .catch((erro) => (this._mensagem.texto = erro));
  }
}
