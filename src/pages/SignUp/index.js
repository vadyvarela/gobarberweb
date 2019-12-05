import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions'

const schema = Yup.object().shape({
    name: Yup.string().required('O Campo nome é obrigatori'),
    email: Yup.string()
        .email('Insira um email valido')
        .required('O email é obrigatorio'),

    password: Yup.string()
        .min(6, 'No minimo 6 caracteres')
        .required('O senha é obrigatorio'),
});

export default function SignUp() {
    const dispatch = useDispatch();

    function handleSubmit({ name, email, password }) {
        dispatch(signUpRequest(name, email, password));
    }

    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="Seu email" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha secreta"
                />

                <button type="submit">Cria conta</button>

                <Link to="/"> Ja tenho login </Link>
            </Form>
        </>
    );
}
