import React, { useContext, useEffect, useState} from 'react'
import Classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon"
import CartContext from '../../store/Cart-Context';
const HeaderCartButton = (props) => {
  const [buttonAnimate,setButtonAnimate]=useState(false);
  
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(()=>{
      if(numberOfCartItems===0){
        return;
      }
      setButtonAnimate(true);
      const timer=setTimeout(()=>{
        setButtonAnimate(false)
      },300)


      return ()=>{
        clearTimeout(timer);
      }
  },[cartCtx.items,numberOfCartItems])
  const classBadge=buttonAnimate?`${Classes.button} ${Classes.bump}`:`${Classes.button}`;
  return (
    <button type={props.type} onClick={props.onClick} className={classBadge} >
        <span className={Classes.icon}>
             <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={Classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
  )
}

export default HeaderCartButton
