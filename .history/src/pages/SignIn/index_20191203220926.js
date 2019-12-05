import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um email valido')
        .required('O email é obrigatorio'),

    password: Yup.string().required('O senha é obrigatorio'),
});

export default function SignIn() {
    // const dispatch = useDispatch();

    // function handleSubmit({ email, password }) {
    //     dispatch(signInRequest({ email, password }));
    // }

    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form schema={schema} onSubmit>
                <Input
                    name="email"
                    type="email"
                    placeholder="Seu email valido"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha secreta"
                />

                <button type="submit">Acessar</button>

                <Link to="/register"> Crie uma conta gratuita </Link>
            </Form>
        </>
    );
}
