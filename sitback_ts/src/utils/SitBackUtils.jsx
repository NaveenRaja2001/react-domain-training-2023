

export const formResultCard = (name = '', homeTown = '', destination = '') => {
    return (
        `Thank You ${name} for expressing your interest in travelling with us .Our Sales team will get back with the best packages from ${homeTown} to ${destination}.`
    )
}

export const toggleScrolling = (scroll = true) => {
    scroll ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';
}



export const addWishList=(product)=>{
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist'));
    let tempList=[];
    if(wishlistItems==null){
       tempList=[product]
    }
    else{
    tempList = wishlistItems.filter(item => item.id !== product.id);
    tempList = [product, ...tempList];
    }
    localStorage.setItem('wishlist',JSON.stringify(tempList));
    return tempList;
    }

    export const removeDataFromWishlist = (product) => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist'));
        let tempList = wishlist.filter(item => item.id !== product.id);
        localStorage.setItem('wishlist',JSON.stringify(tempList));
        return tempList;
    };
    export  const addDataToCart = (product, quantity) => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(cart == null) {
            let cartProduct = {...product};
            cartProduct.quantity = 1;
            cart=[cartProduct];
        }
        else {
            let cartProductIndex = cart.findIndex(item => item.id === product.id);
            if(cartProductIndex===-1){
                let cartProduct = {...product};
                cartProduct.quantity = 1;
                cart.push(cartProduct);
            }
            else{
            cart[cartProductIndex].quantity += quantity;
            if(cart[cartProductIndex].quantity === 0) {
                cart.splice(cartProductIndex, 1);
            }
        }
        }
        let totalPrice= JSON.parse(localStorage.getItem('totalprice'));
        let currentTotalprice=0;
        quantity<0?currentTotalprice=totalPrice-parseInt(product.price):currentTotalprice=parseInt(product.price)+totalPrice;
        localStorage.setItem('totalprice', JSON.stringify(currentTotalprice));
        localStorage.setItem('cart', JSON.stringify(cart));
        return {cart,currentTotalprice};
    };

    export const convertIndianRupee = price => {
        price = parseInt(price,);
        return price.toLocaleString('en-IN');
    };
    export const convertGuaranteeMessage = guarantee => {
        return guarantee === 1 ? `1 YEAR GUARANTEE` : `${guarantee} YEARS GUARANTEE`;
    };