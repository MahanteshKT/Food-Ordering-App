import {createContext} from 'react'

const CartContext = createContext({
    TotalAmount:0,
    items:[],
    onAddCart:(item)=>{},
    onDeleteCart:(id)=>{},
})





export default CartContext
