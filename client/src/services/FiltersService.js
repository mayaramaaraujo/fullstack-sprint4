const FiltersService = {
  getFilters() {
    fetch("data/products.json")
      .then(r => {
        if(r.ok) {
          return r.json();
        } else {
          throw new Error(r.json())
        }
      })
      .then(data => data.filters)
      .catch(err => console.log(err))
  } 
}

export default FiltersService;