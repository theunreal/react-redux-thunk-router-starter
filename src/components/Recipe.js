import React, { Component } from 'react';
import PropTypes from "prop-types";

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
            <section>
                <li onClick={this.selectRecipe}
                    className={`${this.props.selectedRecipe ? 'bold' : null}`}>
                    Item {this.props.recipe.id}
                </li>
            </section>
        );
    }
}

Recipe.propTypes = {
    recipe: PropTypes.any
};


export default Recipe;
