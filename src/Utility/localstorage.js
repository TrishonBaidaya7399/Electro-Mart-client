const getStoredItems = () =>{
    const storedProduct = localStorage.getItem('cart-items')
    if(storedProduct){
        return JSON.parse(storedProduct)
    }
    return [];
}

const saveAddToCart = id =>{
    const storedProducts = getStoredItems();
    const exists = storedProducts.find(productId=> productId === id)
    if(!exists)
    {
        storedProducts.push(id);
        localStorage.setItem('cart-items', JSON.stringify(storedProducts))
    }
}

export {saveAddToCart, getStoredItems}; 