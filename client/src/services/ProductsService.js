const getProducts = async (setIsLoaded, setProducts) => {
  let response = await fetch("data/products.json").then(response => response.json());

  if (response.products) {
    setProducts(response.products)
    setIsLoaded(false)
  }
}

export default getProducts;