import React from "react";
import { useEffect, useState } from "react";
import { getRecipes, getRecipesByMealType, getRecipesByFoodType } from "../Services/recipes.js";
import "./Home.css";
import RecipeCard from "../Componenets/RecipeCard.jsx";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [course, setCourse] = useState("");
  const [food, setFood] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const recipesData = await getRecipes();
        setRecipes(recipesData);
      } catch {
        console.log("Cannot retrieve recipes.");
      }
    };
    fetchRecipes();
  }, []);

  const handleMealSelect = (e) => {
    setCourse(e.target.value);
  };

  const fetchCourseRecipes = async () => {
    try {
      const recipesCourseData = await getRecipesByMealType(course);
      console.log(recipesCourseData);
      setRecipes(recipesCourseData);
    } catch {
      console.log("Cannot retrieve course recipes.");
    }
  };

  const handleFoodSelect = (e) => {
    setFood(e.target.value);
  };

  const fetchFoodRecipes = async () => {
    try {
      const recipesFoodData = await getRecipesByFoodType(food);
      setRecipes(recipesFoodData);
    } catch {
      console.log("Cannot retrieve food recipes.");
    }
  };

  const reloadPage = () => {
    window.location.reload()
  }

  // const fetchRecipes = async () => {
  //   try {
  //     const recipesData = await getRecipes();
  //     setRecipes(recipesData);
  //   } catch {
  //     console.log("Cannot retrieve recipes.");
  //   }
  // };

  return (
    <div className="main-page">
      <h1 className="main-title">Cooking Collective</h1>
      <div className="meal-search">
        <label>Choose your course:</label>
        <select className="meal-select" onChange={handleMealSelect}>
          <option value="">--Please choose a course--</option>
          <option value="brea">Breakfast</option>
          <option value="ludi">Lunch/Dinner</option>
          <option value="dess">Dessert</option>
          <option value="side">Side</option>
          <option value="star">Starter</option>
        </select>
        <input
          className="meal-submit-btn"
          type="submit"
          value="SUBMIT"
          onClick={fetchCourseRecipes}
        />
      </div>
      <h3> -- OR -- </h3>
      <div className="food-search">
        <label>Choose your main:</label>
        <select className="food-select" onChange={handleFoodSelect}>
          <option value="">--Please choose a main--</option>
          <option value="beef">Beef</option>
          <option value="chic">Chicken</option>
          <option value="goat">Goat</option>
          <option value="lamb">Lamb</option>
          <option value="past">Pasta</option>
          <option value="pork">Pork</option>
          <option value="seaf">Seafood</option>
          <option value="vega">Vegan</option>
          <option value="vege">Vegetarian</option>
          <option value="othe">Other</option>
        </select>
        <input
          className="food-submit-btn"
          type="submit"
          value="SUBMIT"
          onClick={fetchFoodRecipes}
        />
      </div>
      <button className="reset-btn" onClick={reloadPage}>Reset</button>
      <div className="recipes">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe._id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
