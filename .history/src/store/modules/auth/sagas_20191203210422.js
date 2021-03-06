import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
    const { password } = payload;

    const response = yield call(api.post, 'sessions', {
        password,
    });

    // const { token, user } = response.data;

    // if (!user.provider) {
    //     console.tron.error('Usuario nao é prestador de serviço');
    //     return;
    // }

    // yield put(signInSuccess(token, user));
    // history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
