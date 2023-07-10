import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Model from "../UI/Model/Model"
import CartContext from '../../store/Cart-Context'
import CartItems from './CartItems'
const Cart = (props) => {
    
    const Cartctx=useContext(CartContext);
    
    const AddItemHandler=(item)=>{
        item={
            ...item,
            amount:1
        }
        Cartctx.onAddCart(item);
    }

    const RemoveItemHandler=(id)=>{
        Cartctx.onDeleteCart(id);
    }
    
    
    const CartMeals=(<ul className={classes['cart-items']} >
        {(Cartctx.items.map((item)=>(
            <CartItems 
                key={item.id}
                CartItem={item}
                onAdd={AddItemHandler.bind(null,item)}
                onRemove={RemoveItemHandler.bind(null,item.id)}
            
            />
        )))}
    </ul>);

    const OrderItemsHandler=()=>{
        console.log("Ordering......")
        props.onHideCart();
    }

    return (
        <Model onClick={props.onHideCart}>
            <ul className={classes.cartList}>
                {CartMeals}
            </ul>
            
            <div className={classes.total}>
                <h3>Total Amount</h3>
                <span>{`\u20B9${Cartctx.TotalAmount.toFixed(2)}`}</span>
            </div>
            <div className={classes.actions}>
                <button 
                    className={classes['button--alt']}
                    onClick={props.onHideCart}
                >Close</button>
               {Cartctx.items.length>0 && <button 
                    className={classes['button']}
                    onClick={OrderItemsHandler}
                >Order</button>
               }
            </div>
        </Model>
    )
}

export default Cart
