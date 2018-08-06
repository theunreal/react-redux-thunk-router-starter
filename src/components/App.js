import React, { Component } from 'react';
import {Provider} from "react-redux";
import configureStore from '../store/configureStore';
import {Route, Switch} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import RecipePage from "./RecipePage";
import Header from "./Header";
import Home from "./Home";

const { store, history } = configureStore();

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <section>
                    <Header></Header>
                      <Switch>
                        <Route path={`/`} exact component={Home}/>
                        <Route path={`/recipe/:recipeId`} exact component={RecipePage}/>
                      </Switch>
                </section>
            </ConnectedRouter>
        </Provider>
    );
  }
}


export default App;
