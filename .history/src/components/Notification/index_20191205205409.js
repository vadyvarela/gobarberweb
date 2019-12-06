import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
    Container,
    Badge,
    Scroll,
    NotificationList,
    Notifications,
} from './styles';

export default function Notification() {
    const [visible, setVisible] = useState(false);
    const [notifications, setNotifications] = useState([]);

    const hasUnread = useMemo(
        () => !!notifications.find(notification => notification.read === false),
        [notifications]
    );

    useEffect(() => {
        async function loadNotifications() {
            const response = await api.get('notifications');

            const data = response.data.map(notification => ({
                ...notification,
                timeDistance: formatDistance(
                    parseISO(notification.createdAt),
                    new Date(),
                    { addSuffix: true, locale: pt }
                ),
            }));

            setNotifications(data);
        }

        loadNotifications();
    }, []);

    function handleToggleVisible() {
        setVisible(!visible);
    }

    async function handleMarkHasRead(id) {
        await api.put(`notifications/${id}`);

        setNotifications(
            notifications.map(notification =>
                notification._id === id
                    ? { ...notification, read: true }
                    : notification
            )
        );
    }

    return (
        <Container>
            <Badge onClick={handleToggleVisible} hasUnreade={hasUnread}>
                <MdNotifications color="#7159c1" size={25} />
            </Badge>

            <NotificationList visible={visible}>
                <Scroll>
                    {notifications.map(notification => (
                        <Notifications
                            key={notification._id}
                            unread={!notification.read}
                        >
                            <p> {notification.content} </p>
                            <tile> {notification.timeDistance} </tile>
                            {!notification.read && (
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleMarkHasRead(notification._id)
                                    }
                                >
                                    {' '}
                                    Marcar como lida
                                </button>
                            )}
                        </Notifications>
                    ))}
                </Scroll>
            </NotificationList>
        </Container>
    );
}
