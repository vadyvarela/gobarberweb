import React from 'react';

import { MdNotifications } from 'react-icons/md';
import {
    Container,
    Badge,
    Scroll,
    NotificationList,
    Notifications,
} from './styles';

export default function Notification() {
    return (
        <Container>
            <Badge hasUnreade>
                <MdNotifications color="#7159c1" size={20} />
            </Badge>

            <NotificationList>
                <Scroll>
                    <Notifications unread>
                        <p> Voce possui um novo agendamento para amanha </p>
                        <tile> Ha 2 dias </tile>
                        <button type="button"> Marcar como lida</button>
                    </Notifications>
                    <Notifications>
                        <p> Voce possui um novo agendamento para amanha </p>
                        <tile> Ha 2 dias </tile>
                        <button type="button"> Marcar como lida</button>
                    </Notifications>
                    <Notifications>
                        <p> Voce possui um novo agendamento para amanha </p>
                        <tile> Ha 2 dias </tile>
                        <button type="button"> Marcar como lida</button>
                    </Notifications>
                </Scroll>
            </NotificationList>
        </Container>
    );
}
