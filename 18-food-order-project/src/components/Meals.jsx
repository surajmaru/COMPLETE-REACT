import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import MealItem from './MealItem';

function Meals() {

    const [ loadedMeals, setLoadedMeals ] = useState([]);

    useEffect(() => {
        async function fetchMeals(){
            try{
                const response = await fetch("http://localhost:3000/meals")
                if(!response.ok){
                    // 
                }
                const meals = await response.json()
                setLoadedMeals(meals)
        
            } catch(error){
                console.error("Error fetching meals:", error)
            }
    
        }
    
        fetchMeals();
    }, []);

    // fetch("http://localhost:3000/meals").then((response) => {

    // })

  return (
    <ul id='meals'>
        {
            loadedMeals.map((meal) => (
                <MealItem meal={meal} key={meal.id}/>
            ))
        }
    </ul>
  )
}

export default Meals