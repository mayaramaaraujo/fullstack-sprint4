const CategoriesService = {
  getAll() {
    return fetch("data/categories.json")
      .then(r => {
        if(r.ok) {
          return r.json();
        } else {
          throw new Error(r.json())
        }
      })
      .then(data => data.all)
      .catch(err => console.log(err))
  },
  getCurrent() {
    return fetch("data/categories.json")
      .then(r => {
        if(r.ok) {
          return r.json();
        } else {
          throw new Error(r.json())
        }
      })
      .then(data => data.current)
      .catch(err => console.log(err))
  }
}

export default CategoriesService;