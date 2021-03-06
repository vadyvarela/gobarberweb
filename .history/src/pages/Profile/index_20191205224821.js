import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdPowerSettingsNew } from 'react-icons/md';

import { Container } from './styles';

export default function Profile() {
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data) {}

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" placeholder="Seu endereço de email" />
                <hr />
                <Input
                    type="password"
                    name="oldPassword"
                    placeholder="Sua senha atual"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Nova senha"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmaçao de senha"
                />

                <button type="submit">Atualizar Perfil</button>
            </Form>
            <button type="button">
                {' '}
                <MdPowerSettingsNew color="#fff" size={20} /> Sair do GoBarber
            </button>
        </Container>
    );
}
