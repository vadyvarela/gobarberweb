import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignIn() {
    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form>
                <Input type="email" placeholder="Seu email" />
                <Input type="password" placeholder="Sua senha secreta" />

                <button type="submit">Acessar</button>

                <Link to="/register"> Crie uma conta gratuita </Link>
            </Form>
        </>
    );
}
