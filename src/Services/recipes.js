import api from ".apiConfig.js"

//get all recipes

export const getRecipes = async () => {
    try{
        const response = await api.get("/recipies/");
        return response.data;
    } catch (error){
        throw error;
    }
}

//get all recipes of a particular meal type

//get all recipes with a particular food

//get singular recipe by id

export const getRecipe = async (id) => {
    try {
        const response = await api.get(`/recipes/${id}/`);
        return response.data;
    } catch (error){
        throw error;
    }
}

//create new recipe

//edit recipe

//delete recipe