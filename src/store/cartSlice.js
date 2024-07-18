import {createSlice} from '@reduxjs/toolkit'


const fetchFromLocalStore = () =>{
    let cart = localStorage.getItem('cart');
    if(cart){
        return JSON.parse(localStorage.getItem('cart'))
    }else {
        return [];
    }

}

const storeInLocalStorage = (data)=>{
    localStorage.setItem('cart',JSON.stringify(data));
}
const initialState = {
    carts:fetchFromLocalStore(),
    itemsCount: 0,
    totalAmount: 0,
    isCartMessageOn: false
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart:(state, action) =>{
            const isItemInCart = state.carts.find(
                item => item.id === action.payload.id);

            if(isItemInCart){
                const tempCart = state.carts.map(item =>{
                    if(item.id === action.payload.id){
                        let tempQty = item.quantity + action.payload.quantity;
                        let tempTotalPrice = tempQty + item.price;
                        return{
                            ...item,quality: tempQty,
                            totalPrice: tempTotalPrice
                        }
                    }else {return item;}
                });
                state.carts = tempCart;
                storeInLocalStorage(state.carts);
            }else {

                state.carts.push(action.payload);
                storeInLocalStorage(state.carts);

            }
        },
        removeFromCart:(state, action) =>{
            const tempCart = state.carts.filter(item => item.id !== action.payload.id);
            state.carts = tempCart;
            storeInLocalStorage(state.carts);
        },
        clearCart:(state, action) =>{
            state.carts = [];
            storeInLocalStorage(state.carts);

        },
        getCartTotal:(state) =>{
            state.totalAmount = state.carts.reduce((
                cartTotal,cartItem) => {
                return cartTotal += cartItem.totalPrice
                },0);
            state.itemsCount = state.carts.length;

        },
        toggleCartQty: (state, action) =>{
            const tempCart = state.carts.filter(item => {
                if(item.id === action.payload.id){
                    let temQty = item.quantity;
                    let tempTotalPrice = item.totalPrice;

                    if(action.payload.type === "INC"){
                        tempQty++;
                        if(temQty === item.stock) temQty=item.stock;
                        tempTotalPrice = tempQty * item.discountedPrice;
                    }
                    if(action.payload.type === "DEC"){
                        temQty--;
                        if (temQty < 1) temQty =1;
                        tempTotalPrice = tempQty*item.discountedPrice;

                    }
                    return{...item, quality: temQty,totalPrice: tempTotalPrice};
                }else {return item;}
            });
            state.carts = tempCart;
            storeInLocalStorage(state.carts);
        },
        setCartMessageOn: (state) => {
            state.isCartMessageOn = true;
        },
        setCartMessageOff: (state) => {
            state.isCartMessageOn = false;
        }

    }
});
export  const {addToCart, setCartMessageOff, setCartMessageOn,getCartTotal, toggleCartQty} = cartSlice.actions;
export const getAllCarts = (state) => state.cart.carts;
export const getCartItemsCount = (state) => state.cart.itemsCount;
export const getCartMessageStatus = (state) => state.cart.isCartMessageOn;
export  default cartSlice.reducer;