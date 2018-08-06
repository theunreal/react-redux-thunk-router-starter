import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

const history = createBrowserHistory();

export default function configureStore(initialState) {

    const composeEnhancers =
             window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    //             // options like actionSanitizer, stateSanitizer
             });

     const enhancer = composeEnhancers(
         applyMiddleware(thunk, routerMiddleware(history)),
     );

    // const enhancer = applyMiddleware(thunk)

    const store = createStore(
        connectRouter(history)(rootReducer),
        initialState,
        enhancer
    );

    return { store, history };
}