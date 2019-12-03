import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';

import { signInSuccess } from './actions'

export function signIn({ payload }) {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
        email,
        password
    });

    const { token, user } = response.data;

    if(!user.provider){
        console.tron.error('Usuario nao é prestador de serviço')
        return;
    }

    yield put(signInSuccess)
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
