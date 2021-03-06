import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });

        const { token, user } = response.data;
        if (!user.provider) {
            console.log('Usuário não é um prestador de serviços');
            // toast.error('Usuário não é um prestador de serviços');
            return;
        }

        // api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(signInSuccess(token, user));

        history.push('/dashboard');
    } catch (err) {
        console.log('Falha na autenticação, verifique seus dados');
        // toast.error('Falha na autenticação, verifique seus dados');
    }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
