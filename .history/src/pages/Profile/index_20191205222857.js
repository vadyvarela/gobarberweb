import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
    return (
        <Container>
            <Input name="name" placeholder="Nome completo" />
            <Input name="email" placeholder="Seu endereço de email" />
            <hr />
            <Input
                type="password"
                name="oldPassword"
                placeholder="Sua senha atual"
            />
            <Input type="password" name="password" placeholder="Nova senha" />
            <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirmaçao de senha"
            />
        </Container>
    );
}
