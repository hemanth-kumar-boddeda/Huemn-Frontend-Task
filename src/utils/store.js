import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Enable Redux DevTools Extension or fall back to Redux compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store with the root reducer and middleware
const globalStore = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  ),
);

// Run the root saga
sagaMiddleware.run(rootSaga);

export default globalStore;
