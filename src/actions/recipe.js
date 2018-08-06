import axios from 'axios';

export function recipeHaveError(bool) {
    return {
        type: 'RECIPE_HAVE_ERROR',
        hasError: bool
    };
}

export function recipeIsLoading(bool) {
    return {
        type: 'RECIPE_IS_LOADING',
        isLoading: bool
    };
}

export function recipeFetchDataSuccess(recipe) {
    return {
        type: 'RECIPE_FETCH_DATA_SUCCESS',
        recipe
    };
}

export function recipeFetchData(url) {
    return (dispatch) => {
        dispatch(recipeIsLoading(true));

        axios.get(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(recipeIsLoading(false));

                return response;
            })
            .then((response) => dispatch(recipeFetchDataSuccess(response.data)))
            .catch(() => dispatch(recipeHaveError(true)));
    };
}