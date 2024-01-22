import React, { useEffect, useState } from 'react';
import axios from 'axios';

const myPara = {
  display: "inline-flex",
}

const Meals = () => {
  const [Meals, setMeals] = useState([]);
  const [deletedItems, setDeletedItems] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        //**** Using Axios ****//
        // const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian');
        // const data = response.data.meals;
        // console.log(data);
        // setMeals(data);

        //**** Using Fetch ****//
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian');
        const data = await response.json();
        console.log(data);
        setMeals(data.meals);
      } catch (error) {
        console.error('Error fetching Meals:', error);
      }
    };
    fetchMeals();
  }, []);

  const handleDelete = (itemId) => {
    // Simulate deletion locally by moving the item to the deletedItems array
    const deletedItem = Meals.find((meal) => meal.idMeal === itemId);
    setDeletedItems([...deletedItems, deletedItem]);
    setMeals(Meals.filter((meal) => meal.idMeal !== itemId));
  };

  return (
    <div>
    <h2>Meal List</h2>
    <ul>
      {Meals.map((meal) => (
        <li key={meal.idMeal}>
          <strong>{meal.strMeal}</strong><br/>
          <img src={meal.strMealThumb} alt={meal.strMeal} width={100}/>
          <div>
        <button onClick={() => handleDelete(meal.idMeal)}>Delete</button>

     
    </div>
          </li>

          
      ))}
    </ul>
  </div>
  );
};

export default Meals;
