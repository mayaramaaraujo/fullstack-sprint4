const getBreadcrumbs = async (setIsLoaded, setBreadcrumbs) => {
  let response = await fetch("data/categories.json").then(response => response.json());

  if (response.current) {
    setBreadcrumbs(response.current)
    setIsLoaded(false)
  }
}

export default getBreadcrumbs;