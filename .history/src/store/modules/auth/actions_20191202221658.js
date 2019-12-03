export function signRequest(email, password) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, password },
    };
}

export function SignSuccess(token, user) {
    return {
        type: '@auth/SIGN_SUCCESS',
        payload: { token, user },
    };
}

export function signFailure() {
    return {
        type: '@auth/SIGN_FAILURE',
    };
}
