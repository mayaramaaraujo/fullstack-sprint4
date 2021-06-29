const getFilters = async (setIsLoaded, setFilters) => {
  let response = await fetch("data/products.json").then(response => response.json());


  if (response.filters) {
    setFilters(response.filters)
    setIsLoaded(false)
  }
}

export default getFilters;