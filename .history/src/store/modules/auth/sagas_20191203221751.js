import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
    const { email, password } = payload;

    try {
        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(`MERDA DO CARALHO ${error}`);
    }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
