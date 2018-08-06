import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {recipesFetchData, recipesSelectRecipe} from "../actions/recipes";
import {connect} from "react-redux";
import Recipe from "./Recipe";


class Recipes extends Component {

    CACHE_TIME = 600000; // 10 minutes

    constructor() {
        super();
        this.selectRecipe = this.selectRecipe.bind(this);
    }

    componentDidMount() {
        if (this.props.lastRecipesFetchTs + this.CACHE_TIME < new Date().getTime())
            this.props.fetchData('https://www.reciper.co.il/api/public/recipes');
        else
            console.log(`Fetch already up to date. Next in: ${(this.CACHE_TIME - (new Date().getTime() - this.props.lastRecipesFetchTs)) / 1000} seconds`);
    }

    selectRecipe(item) {
        this.props.selectRecipe(item);
    }


    render() {

        if (this.props.hasError) {
            return <p>Error!</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <section>
                    {this.props.recipes.map((item) => (
                        <ul key={item.id}>
                                <Recipe recipe={item}
                                        selectRecipe={this.selectRecipe}></Recipe>
                        </ul>
                    ))}
            </section>
        );
    }
}

Recipes.propTypes = {
    fetchData: PropTypes.func.isRequired,
    recipes: PropTypes.array.isRequired,
    hasError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    selectRecipe: PropTypes.func.isRequired,
    lastRecipesFetchTs: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        hasError: state.recipesHaveError,
        isLoading: state.recipesAreLoading,
        lastRecipesFetchTs: state.lastRecipesFetchTs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(recipesFetchData(url)),
        selectRecipe: (recipe) => dispatch(recipesSelectRecipe(recipe)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
