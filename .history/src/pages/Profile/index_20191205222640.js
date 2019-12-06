import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
    return (
        <Container>
            <Input name="name" plaveholde="Nome completo" />
            <Input name="email" plaveholde="Seu endereço de email" />
            <hr />
        </Container>
    );
}
