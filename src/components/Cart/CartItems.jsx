import React from 'react'
import classes from './CartItems.module.css';


const CartItems = (props) => {
  
    

  return (
    <li className={classes['cart-item']}>
        <div className={classes['cart-summary']}>
            <h3>{props.CartItem.name}</h3>
            <div style={{display:'flex',flexDirection:'row'}}>
                <span className={classes['cart-price'] }>{`\u20B9${props.CartItem.price.toFixed(2)}`}</span>
                <span className={classes['cart-amount'] }>x {props.CartItem.amount}</span>
            </div>
        </div>

        <div className={classes['cart-actions']}>
            <button onClick={props.onRemove}>-</button>
            <button  onClick={props.onAdd}>+</button>
        </div>

    </li>
  )
}

export default CartItems
