import React from 'react';
import logo from '~/assets/logo.svg';
// import { Container } from './styles';

export default function SignIn() {
    return (
        <>
            <img src={logo} alt="GoBarber" />

            <form action="">
                <input type="email" placeholder="Seu email" />
                <input type="password" placeholder="Sua senha secreta/>
            </form>
        </>
    );
}
