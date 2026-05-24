import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import MealItem from './MealItem';
import useHttp from '../hooks/useHttp';
import ErrorMsg from './Error';

const requestConfig = {};

function Meals() {

    const {data: loadedMeals, isLoading, error} = useHttp("http://localhost:3000/meals", requestConfig, []);

    if(isLoading){
        return <p className='center'>Fetching Meals...</p>
    }

    if(error){
        return <ErrorMsg title="Failed to fetch the meals!!" message={error} />
    }

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