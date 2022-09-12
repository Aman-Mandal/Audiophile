export const fetchData = async product => {
  const response = await fetch(
    `https://audiophile-aman-default-rtdb.firebaseio.com/products/${product}.json`
  )
  const data = await response.json()

  const loadedData = []

  for (const key in data) {
    loadedData.push({
      id: data[key].id,
      name: data[key].name,
      description: data[key].description,
      img: data[key].img,
      features: data[key].features,
      price: data[key].price,
      moreImgs: data[key].moreImgs,
      boxContent: data[key].boxContent,
    })
  }

  return loadedData
}
