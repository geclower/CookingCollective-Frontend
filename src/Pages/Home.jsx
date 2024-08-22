import React from "react";
import { useEffect, useState } from "react";
import { getRecipes } from "../Services/recipes.js";
import "./Home.css";
import RecipeCard from "../Componenets/RecipeCard.jsx";

function Home() {
  const [recipes, setRecipes] = useState([]);

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

  return (
    <div className="main-page">
      <h1 className="main-title">Cooking Collective</h1>
      <div className="recipes">
        {recipes.map((recipe)=>(
            <RecipeCard recipe={recipe} key={recipe._id}/>
        ))}
      </div>
    </div>
  );
}

export default Home;
