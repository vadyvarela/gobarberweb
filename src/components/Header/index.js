import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notification';

import logoPurple from '~/assets/header.svg';
import { Container, Profile, Content } from './styles';

export default function Header() {
    const profile = useSelector(state => state.user.profile);

    return (
        <Container>
            <Content>
                <nav>
                    <img src={logoPurple} alt="" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Notifications />
                    <Profile>
                        <div>
                            <strong> {profile.name} </strong>
                            <Link to="/profile">Meu Perfil</Link>
                        </div>
                        <img
						src='https://api.adorable.io/avatars/50/abott@adorable.png'
                            /*src={
                                profile.avatar.url ||
                                'https://api.adorable.io/avatars/50/abott@adorable.png'
                            }*/
                            alt="Vady Varela"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
