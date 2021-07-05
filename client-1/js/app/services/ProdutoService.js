class ProdutoService {
  constructor() {
    this._http = new HttpService();
  }

  obterProdutos() {
    return this._http
      .get("produtos")
      .then((produtos) =>
        produtos.map((p) => new Produto(p.imagem, p.descricao, p.valor))
      )
      .catch((erro) => {
        console.log(erro);
        window.alert("Não foi possível obter os produtos");
      });
  }
}
