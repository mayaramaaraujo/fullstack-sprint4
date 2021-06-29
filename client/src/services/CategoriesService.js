const getCategories = async (setIsLoaded, setCategories) => {
  let response = await fetch("data/categories.json").then(response => response.json());

  if (response.all) {
    setCategories(response.all)
    setIsLoaded(false)
  }
}

export default getCategories;