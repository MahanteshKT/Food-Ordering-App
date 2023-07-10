import CartContext from './Cart-Context'
import { CartItemsReducer } from './CartItemReducer';

const CartContextProvider = (props) => {
    const {CartItems,dispatchCartAction}=CartItemsReducer()
    const AddItemCartHandler=(item)=>{
        dispatchCartAction({type:"ADD",item:item});
    }
  
    const RemoveItemCartHandler=(id)=>{
        dispatchCartAction({type:"REMOVE",id:id});

    }
    
    const cartContext={
        items:CartItems.items,
        TotalAmount:CartItems.TotalAmount,
        onAddCart:AddItemCartHandler,
        onDeleteCart:RemoveItemCartHandler,
    }

    return(
    <CartContext.Provider 
        value={cartContext}
    >
        {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
