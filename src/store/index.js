import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import Heroes from './heroes/heroes-duck';
import Template from './template-duck';

const NodeEnvDevelopment = 'development';


let composeEnhancers = compose;

if (process.env.NODE_ENV.trim() === NodeEnvDevelopment) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default createStore(
  combineReducers({
    Heroes,
    Template,
  }),
  composeEnhancers(applyMiddleware()),
);


