import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um email valido')
        .required('O email é obrigatorio'),

    password: Yup.string().required('O email é obrigatorio'),
});

export default function SignUp() {
    function handleSubmit(data) {
        console.tron.log(data);
    }

    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input placeholder="Nome completo" />
                <Input type="email" placeholder="Seu email" />
                <Input type="password" placeholder="Sua senha secreta" />

                <button type="submit">Cria conta</button>

                <Link to="/"> Ja tenho login </Link>
            </Form>
        </>
    );
}
