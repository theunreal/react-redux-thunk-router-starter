import React, { Component } from 'react';
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import {recipeFetchData} from "../actions/recipe";

class RecipePage extends Component {

    componentDidMount() {
        this.props.fetchData('https://www.reciper.co.il/api/public/recipes/view/' + this.props.match.params.recipeId);
    }

    render() {
        if (this.props.recipe) {
            return <p>ID: {this.props.recipe.id}</p>
        }
        return (
            <h3>This:</h3>
        );
    }
}

RecipePage.propTypes = {
    fetchData: PropTypes.func.isRequired,
    recipe: PropTypes.object,
    hasError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        recipe: state.recipe,
        hasError: state.recipeHaveError,
        isLoading: state.recipeIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(recipeFetchData(url)),

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
