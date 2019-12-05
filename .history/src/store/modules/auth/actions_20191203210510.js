export function signInRequest(email) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email },
    };
}

export function signInSuccess(token, user) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { token, user },
    };
}

export function signFailure() {
    return {
        type: '@auth/SIGN_FAILURE',
    };
}
