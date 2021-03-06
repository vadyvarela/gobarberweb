import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignUp() {

    handleSubmit(data) {
        console.tron.log(data);
    }

    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form onSubmit={handleSubmit}>
                <Input placeholder="Nome completo" />
                <Input type="email" placeholder="Seu email" />
                <Input type="password" placeholder="Sua senha secreta" />

                <button type="submit">Cria conta</button>

                <Link to="/"> Ja tenho login </Link>
            </Form>
        </>
    );
}
