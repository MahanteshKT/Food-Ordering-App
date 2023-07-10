import React from 'react'
import ReactDOM from 'react-dom';
import classes from "./Model.module.css";

const Backdrop=(props)=>{
    return (
        <div className={classes.backdrop} onClick={props.onClick} />
    );
}

const ModelOverlay=(props)=>{
    return <div className={classes.modal}> 
            {props.children}
    </div>
}


const PortalElement=document.getElementById("overlay");

const Model = (props) => {
  return (
    <React.Fragment>
        {
            ReactDOM.createPortal(
                <Backdrop onClick={props.onClick}  />,PortalElement
            )
        }
        {
            
            ReactDOM.createPortal(
                <ModelOverlay onClick={props.onClick}>{props.children}</ModelOverlay>,
                PortalElement
            )
        }
    </React.Fragment>
  )
}

export default Model
