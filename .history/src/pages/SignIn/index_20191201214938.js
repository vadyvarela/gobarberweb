import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { Container, Content } from './styles';

export default function SignIn() {
    return (
        <>
            <img src={logo} alt="GoBarber" />

            <form>
                <input type="email" placeholder="Seu email" />
                <input type="password" placeholder="Sua senha secreta" />

                <button type="submit">Acessar</button>

                <Link to="/register"> Crie uma conta gratuita </Link>
            </form>
        </>
    );
}
