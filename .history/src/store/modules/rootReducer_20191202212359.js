import { combinedReducer } from 'redux';

import auth from './auth/reducer';

export default combinedReducer({
    auth,
});
