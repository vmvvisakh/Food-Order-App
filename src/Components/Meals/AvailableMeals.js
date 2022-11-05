import React from 'react'
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Arabian Mandi',
      description: 'Mainly of meat and rice with a special blend of spices',
      price: 450,
    },
    {
      id: 'm2',
      name: 'Al Faham',
      description: 'Arabian barbecued chicken usually grilled over coal or in oven',
      price: 300,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 150,
    },
    {
      id: 'm4',
      name: 'Mutton Biryani',
      description: 'classic dish made by layering rice over slow cooked mutton gravy',
      price: 250,
    },
  ];
function AvailableMeals() {
    const mealsList= DUMMY_MEALS.map((meal) =>(<MealItem 
      key={meal.id} 
      id={meal.id}
      name={meal.name}
       description={meal.description} 
       price={meal.price} />
    ))
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
    </section>
  )
}

export default AvailableMeals