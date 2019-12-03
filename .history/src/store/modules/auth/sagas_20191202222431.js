import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';
import { compose } from '~/../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';

export function signIn({ payload }) {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
        email,
        password
    });

    const { token, user } = response.data;

    if(!user.provider){
        compose
    }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
