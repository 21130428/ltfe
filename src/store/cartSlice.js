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
                // action chỉ đơn giản là biểu thị một sự kiện hoặc thay đổi trạng thái mà không cần thêm thông tin cụ thể.
                state.carts.push(action.payload)

            }
        }
    }
});
export  const {addToCart} = cartSlice.actions;
export  default cartSlice.reducer;