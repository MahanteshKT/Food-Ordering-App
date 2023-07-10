import React, { useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart';
import CartContextProvider from './store/CartContextProvider';
const App = () => {
  const [onShowCart,setOnShowCart]=useState(false);
  
  const ShowCartHandler=()=>{
    setOnShowCart(true);
  }

  const HideCartHandler=()=>{
    setOnShowCart(false);
  }

  return (
    <CartContextProvider>
      {onShowCart && <Cart onHideCart={HideCartHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals/>
      </main>

    </CartContextProvider>
  )
}

export default App
