export function recipesHaveError(state = false, action) {
    switch (action.type) {
        case 'RECIPES_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function recipesAreLoading(state = false, action) {
    switch (action.type) {
        case 'RECIPES_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function recipes(state = [], action) {
    switch (action.type) {
        case 'RECIPES_FETCH_DATA_SUCCESS':
            return action.recipes;

        default:
            return state;
    }
}

export function recipesSelectRecipe(state = null, action) {
    switch (action.type) {
        case 'RECIPES_SELECT_RECIPE':
            return action.selectedRecipe;

        default:
            return state;
    }
}

export function lastRecipesFetchTs(state = 0, action) {
    switch (action.type) {
        case 'RECIPES_FETCH_TS':
            return action.lastRecipesFetchTs;

        default:
            return state;
    }
}