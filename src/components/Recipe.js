import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Recipe.css';

class Recipe extends Component {

    constructor() {
        super();
        this.selectRecipe = this.selectRecipe.bind(this);
    }

    selectRecipe() {
        this.props.selectRecipe(this.props.recipe);
    };

    render() {
        return (
                <li onClick={this.selectRecipe} className="clickable">
                    Item {this.props.recipe.id}
                </li>
        );
    }
}

Recipe.propTypes = {
    recipe: PropTypes.any
};


export default Recipe;
