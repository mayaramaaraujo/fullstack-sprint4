class ProdutosView extends View {
  constructor(elemento) {
    super(elemento);
  }

  template(model) {
    return `
    <div class="products__row">
      <ol class="products__list">
      ${model.produtos
        .map(
          (p, i) => `
              <li class="products__card card">
                <div class="card">
                  <img class="card__img" src="${p.imagem}"/>
                  <p class="card__description">
                    ${p.descricao}
                  </p>
                  <p class="card__price">
                    R$ ${p.valor}
                  </p>
                </div>
              </li>
              ${
                i > 0 && i < model.produtos.length - 1 && (i + 1) % 4 === 0
                  ? `
                  </ol>
                </div>
                <div class="products__row">
                  <ol class="products__list">
                  `
                  : ""
              }
        `
        )
        .join("")}
      </ol>
    </div>`;
  }
}
