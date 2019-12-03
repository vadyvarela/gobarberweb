import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
    process.env.NODE_ENV === 'development'
        ? console.tron.createSagaMonitor()
        : null;
const sagaMidleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMidleware];

const store = createStore(rootReducer, middlewares);

sagaMidleware.run(rootSaga);

export default store;
