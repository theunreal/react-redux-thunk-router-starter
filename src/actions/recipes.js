import axios from 'axios';
import { push } from 'connected-react-router';

export function recipesHaveError(bool) {
    return {
        type: 'RECIPES_HAVE_ERROR',
        hasError: bool
    };
}

export function recipesAreLoading(bool) {
    return {
        type: 'RECIPES_ARE_LOADING',
        isLoading: bool
    };
}

export function recipesFetchDataSuccess(recipes) {
    return {
        type: 'RECIPES_FETCH_DATA_SUCCESS',
        recipes
    };
}

export function recipesUpdateLastTs(lastRecipesFetchTs) {
    return {
        type: 'RECIPES_FETCH_TS',
        lastRecipesFetchTs
    };
}

export function recipesFetchData(url) {
    return (dispatch) => {
        dispatch(recipesAreLoading(true));

        axios.get(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(recipesAreLoading(false));

                return response;
            })
            .then((response) => {
                dispatch(recipesFetchDataSuccess(response.data));
                dispatch(recipesUpdateLastTs(new Date().getTime()));
            })
            .catch(() => dispatch(recipesHaveError(true)));
    };
}

export function recipesSelectRecipe(recipe) {
    return (dispatch) => {
        dispatch({
            type: 'RECIPES_SELECT_RECIPE',
            selectedRecipe: recipe
        });
        dispatch(push(`/recipe/${recipe.id}`));
    };
}