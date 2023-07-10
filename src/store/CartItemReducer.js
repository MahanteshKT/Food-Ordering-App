import { useReducer } from 'react'

const DefaultCartItems={
    items:[],
    TotalAmount:0,
}

const CartReducer=(state,action)=>{
    if(action.type === "ADD"){
        const existingCartItemIndex=state.items.findIndex((item)=>item.id===action.item.id)
        const existingCartItem=state.items[existingCartItemIndex];
        let updatedCartItem;
        if(existingCartItem){
            const updatExistingCartItem={
                    ...existingCartItem,
                    amount:existingCartItem.amount + action.item.amount
            }
            updatedCartItem=[...state.items];
            updatedCartItem[existingCartItemIndex]=updatExistingCartItem;
        }
        else{
            updatedCartItem=state.items.concat(action.item);
        }
        const TotalCartAmount=state.TotalAmount+action.item.amount*action.item.price;
        return{
            items:updatedCartItem,
            TotalAmount:TotalCartAmount
        }
    }
    if(action.type === "REMOVE"){
        
        let FilteredCartItemIndex=state.items.findIndex((item)=>item.id===action.id)
        let FilteredCartItem=state.items[FilteredCartItemIndex];
        let UpdatedTotalAmount=state.TotalAmount-FilteredCartItem.price;
        let updatedCartItems;

        if(FilteredCartItem.amount>1){
            FilteredCartItem={
                ...FilteredCartItem,
                amount:FilteredCartItem.amount - 1,
            }
            let items=[...state.items]
            items[FilteredCartItemIndex]=FilteredCartItem;
            updatedCartItems=items;

        }
        else{
            updatedCartItems=state.items.filter((item)=>{ 
                return item.id!==action.id
            })
            
        }
        
        return {
            items:updatedCartItems,
            TotalAmount:UpdatedTotalAmount
        }
    }
    return state;
}


export const CartItemsReducer = () => {
    const [CartItems,dispatchCartAction]=useReducer(CartReducer,DefaultCartItems)
    const CartActions={CartItems,dispatchCartAction}
    return CartActions;
}