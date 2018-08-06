export function recipeHaveError(state = false, action) {
    switch (action.type) {
        case 'RECIPE_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function recipeIsLoading(state = false, action) {
    switch (action.type) {
        case 'RECIPE_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function recipe(state = {}, action) {
    switch (action.type) {
        case 'RECIPE_FETCH_DATA_SUCCESS':
            return action.recipe;

        default:
            return state;
    }
}