const serviceUtils = async (type, description, setData, setIsLoaded) => {
  let response = await fetch(`data/${type}.json`).then(response => response.json());

  if(type === "products") {

    if(description === "filters") {
      setData(response.filters)
      setIsLoaded(false)
    }
  
    if(description === "all") {
      setData(response.all)
      setIsLoaded(false)
    }

  } else {

    if(description === "current") {
      setData(response.filters)
      setIsLoaded(false)
    }
  
    if(description === "all") {
      setData(response.all)
      setIsLoaded(false)
    }
    
  }
}

export default serviceUtils;