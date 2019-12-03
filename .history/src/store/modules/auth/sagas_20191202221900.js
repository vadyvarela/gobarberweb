import { takeLatest, call, put, all } from 'redux-saga/effects';

export function signIn() {}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
