import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

cosnt sagaMonitor = process.env.NODE_ENV === 'development'
? console.tron.createSagaMonitor()
: null
const sagaMidleware = createSagaMiddleware();

const middlewares = [sagaMidleware];

const store = createStore(rootReducer, middlewares);

sagaMidleware.run(rootSaga);

export default store;
