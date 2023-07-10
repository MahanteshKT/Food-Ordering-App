import React, { useContext } from 'react'
import classes from "./MealsItem.module.css"
import MealsItemForm from './MealsItemForm'
import CartContext from '../../../store/Cart-Context'
const MealsItem = (props) => {
    const price=`\u20B9${props.price.toFixed(2)}`
    const Cartctx=useContext(CartContext);
    const SendItemtoCart=(InputValue)=>{
        const item={
            id:props.id,
            name:props.name,
            price:props.price,
            amount:InputValue,
        }
        Cartctx.onAddCart(item)
    }   

    return (
    <div className={classes.meal} >
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <p className={classes.price}>{price}</p>
        </div>
        <div>
            <MealsItemForm id={props.id} onAddItemToCart={SendItemtoCart}/>
            
        </div>
        
    </div>
  )
}

export default MealsItem
