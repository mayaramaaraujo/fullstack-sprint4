class ListaProdutos {
  constructor() {
    this._produtos = [];
  }

  adiciona(produto) {
    this._produtos.push(produto);
  }

  set filtro(filtro) {
    this._filtro = filtro;
  }

  get produtos() {
    console.log('recuperando produtos com filtro: ' + this._filtro);
    return [].concat(this._produtos).filter(p => this._filtro ?
      p.descricao.toLowerCase().indexOf(this._filtro.toLowerCase()) !== -1 : true);
  }
}
