class Produto {
  constructor(imagem, descricao, valor) {
    this._imagem = imagem;
    this._descricao = descricao;
    this._valor = valor;
    Object.freeze(this);
  }

  get imagem() {
    return this._imagem;
  }

  get descricao() {
    return this._descricao;
  }

  get valor() {
    return this._valor;
  }
}
