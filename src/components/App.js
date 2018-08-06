import React, { Component } from 'react';
import {Provider} from "react-redux";
import configureStore from '../store/configureStore';
import {Route, Switch} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import RecipePage from "./RecipePage";
import Header from "./Header";
import Home from "./Home";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import {createMuiTheme} from "@material-ui/core";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

const { store, history } = configureStore();

const theme = createMuiTheme({
    palette: {
        background: {
            default: '#eee'
        }
    }
});

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <MuiThemeProvider theme={theme}>
                    <Header></Header>
                    <CssBaseline />
                      <Switch>
                        <Route path={`/`} exact component={Home}/>
                        <Route path={`/recipe/:recipeId`} exact component={RecipePage}/>
                      </Switch>
                </MuiThemeProvider>
            </ConnectedRouter>
        </Provider>
    );
  }
}


export default App;
