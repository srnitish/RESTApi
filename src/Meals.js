import React, { useEffect, useState } from 'react';
import axios from 'axios';

const myPara = {
  display: "inline-flex",
};

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const cancelToken = axios.CancelToken.source();
      const apiList = [
        'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian',
        'https://rickandmortyapi.com/api/character'
    ]
      try {
        //**** Using Axios ****//
        const [getMealResponse, getCharacterResponse] = await axios.all(apiList.map((url) => axios.get(url, { cancelToken: cancelToken.token })))
        
        const mealData = getMealResponse.data.meals;
        setMeals(mealData);
        
        const characterData = getCharacterResponse.data.results;
        setCharacters(characterData);

        console.log("mealData", mealData);
        console.log("characterData", characterData);

      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          console.error('Error fetching Meals:', error);
        }
      } finally {
        setLoading(false);
      }

      // Cleanup function to cancel the request if the component unmounts
      return () => cancelToken.cancel("Component unmounted");
    };

    fetchMeals();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Meal List</h2>
      <ul>
        {meals.map((meal) => 
          <li key={meal.idMeal}>
            <strong>{meal.strMeal}</strong><br/>
            <img src={meal.strMealThumb} alt={meal.strMeal} width={100}/>
          </li>    
        )}
      </ul>

      <h2>Character List</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <strong>{character.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Meals;
