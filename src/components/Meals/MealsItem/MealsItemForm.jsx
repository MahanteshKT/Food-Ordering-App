import React,{useRef, useState} from 'react'
import classes from "./MealsItemForm.module.css"
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'

const MealsItemForm = (props) => {
  const [enteredAmountisValid,setEnteredAmountisValid]=useState(true);
  const InputRef=useRef();
   
  
  const FormOnSubmitHandler=(e)=>{
    e.preventDefault();
    const InputValue=+(InputRef.current.value.trim());
 
    if(InputValue.length===0 ||
    InputValue.length<1||
    InputValue.length>5){
        setEnteredAmountisValid(false);
        return;
    }
    setEnteredAmountisValid(true);
    props.onAddItemToCart(InputValue);




  }
  
  return (
    <form className={classes.form} onSubmit={FormOnSubmitHandler}>
        <Input
            ref={InputRef}
            label='Amount'
            input={{
                id:'amount'+props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1',
            }}
        />
        <Button>+ Add</Button>
        {!enteredAmountisValid && <p>Please enter a Valid input</p>}
    </form>
  )
}

export default MealsItemForm
