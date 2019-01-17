import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware,compose } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './reducer'
import movieReducer from './components/movies/reducer'
import {combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';


const rootReducer= combineReducers({appReducer,movieReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(
  rootReducer,
  composeEnhancers(applyMiddleware( ReduxThunk))
 )

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()