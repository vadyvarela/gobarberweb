import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMidleware = createSagaMiddleware();

const middlewares = [sagaMidleware];

const store = createStore(rootReducer, middlewares);

sagaMidleware.run(rootSaga);

export default store;
