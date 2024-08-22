import api from "../Services/apiConfig.js";

//get all recipes

export const getRecipes = async () => {
  try {
    const response = await api.get("/recipes/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

//get all recipes of a particular meal type

export const getRecipesByMealType = async (id) => {
  try {
    const response = await api.get(`recipes/meal/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//get all recipes with a particular food

export const getRecipesByFoodType = async (id) => {
  try {
    const response = await api.get(`recipes/food/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//get singular recipe by id

export const getRecipe = async (id) => {
  try {
    const response = await api.get(`/recipes/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//create new recipe

export const createRecipe = async (postData) => {
  let form_data = new FormData();

  form_data.append("name", postData.name);
  form_data.append("category_food", postData.category_food);
  form_data.append("category_meal", postData.category_meal);
  form_data.append("instructions", postData.instructions);
  form_data.append("ingredients", postData.ingredients);

  if (postData.image) {
    form_data.append("image", postData.image);
  }
  if (postData.video) {
    form_data.append("video", postData.video);
  }
  if (postData.source) {
    form_data.append("source", postData.source);
  }

  try {
    const response = await api.post("/recipes/", form_data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//edit recipe

export const editRecipe = async (id, data) => {
  try {
    const response = await api.patch(`/recipes/${id}/`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//delete recipe

export const deleteRecipe = async (id) => {
  try {
    const response = await api.delete(`recipes/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
