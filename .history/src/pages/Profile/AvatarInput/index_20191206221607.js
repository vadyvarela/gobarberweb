import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handelSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    function handelSignOut() {
        dispatch(signOut());
    }
    return (
        <Container>
            <Form initialData={profile} onSubmit={handelSubmit}>
                <AvatarInput name="avatar_id" />
                <Input name="name" placeholder="Nome Completo" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Seu endereço de e-mail"
                />
                <hr />
                <Input
                    name="oldPassword"
                    type="password"
                    placeholder="Sua senha atual"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Nova senha"
                />
                <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirma nova senha"
                />
                <button type="submit">Atualizar perfil</button>
            </Form>
            <button type="button" onClick={handelSignOut}>
                Sair do GoBarber
            </button>
        </Container>
    );
}
