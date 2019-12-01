import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

export default function SignUp() {
    return (
        <>
            <img src={logo} alt="GoBarber" />

            <form>
                <input placeholder="Nome completo" />
                <input type="email" placeholder="Seu email" />
                <input type="password" placeholder="Sua senha secreta" />

                <button type="submit">Acessar</button>

                <Link to="/register"> Crie uma conta gratuita </Link>
            </form>
        </>
    );
}
