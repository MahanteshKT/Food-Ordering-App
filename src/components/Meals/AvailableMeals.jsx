import React from 'react'
import classes from "./AvailableMeals.module.css";
import Card from '../UI/Card/Card';
import MealsItem from './MealsItem/MealsItem';
const AvailableMeals = () => {
    const DUMMY_MEALS=[
        {
            id:'m1',
            name:'Masala Dosa',
            desccription:'Finest Dosa of south India',
            price:100.00,
        },
        {
            id:'m2',
            name:'Ragi Balls',
            desccription:'Finest Ragi Mudde from south india with chichen samdar',
            price:150.00,
        },
        {
            id:'m3',
            name:'Biriyani',
            desccription:'Delicious Hyderbad Biriyani',
            price:150.00,
        },
        {
            id:'m4',
            name:'Roti with paneer masala',
            desccription:'Finest Ragi Mudde from south india with chichen samdar',
            price:150.00,
        },

    ]
    const MealItem=DUMMY_MEALS.map((meal)=>{
        return <MealsItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.desccription}
            price={meal.price} 
        />
    })
                
    return (
    <section className={classes.meals}>
      <Card>
       <ul>{MealItem}</ul>
      </Card>     
    </section>
  )
}

export default AvailableMeals
