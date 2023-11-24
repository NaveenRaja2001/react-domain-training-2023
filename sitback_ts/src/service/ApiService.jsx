

export const fetchCategory = async() => {
  return (
   await  fetch("https://jsonmockserver.vercel.app/api/shopping/furniture/categories")
    .then(response => {
        return response.json()
    })
    .then(data => {
        return data
    })
  )
}

export const fetchProduct = async(categories) => {
   const response= await fetch(`https://jsonmockserver.vercel.app/api/shopping/furniture/products?category=${categories} `)
    return await response.json()
};


export const addDefaultSrc = (ev) => {
  ev.target.src = 'https://images.unsplash.com/photo-1577451949326-1e44d745f758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1950&q=80'
}