import { combineReducers } from 'redux';
import {recipes, recipesHaveError, recipesAreLoading, recipesSelectRecipe, lastRecipesFetchTs} from './recipes';
import {recipe, recipeHaveError, recipeIsLoading} from "./recipe";

export default combineReducers({
    recipes,
    recipesHaveError,
    recipesAreLoading,
    selectedRecipe: recipesSelectRecipe,
    recipe,
    recipeHaveError,
    recipeIsLoading,
    lastRecipesFetchTs
});