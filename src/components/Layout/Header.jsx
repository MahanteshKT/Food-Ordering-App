import React from 'react'
import classes from "./Header.module.css";
import headerImg from "../../assets/meals.jpg";
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  
  return (
    <React.Fragment>
      <header className={classes.header}>
            <h2>DiantyOrder</h2>
            <HeaderCartButton onClick={props.onShowCart}/>           
      </header>
      <div className={classes.mainImage}>
        <img src={headerImg} alt="this is the food ordering "/>
      </div>
    </React.Fragment>
  )
}

export default Header
