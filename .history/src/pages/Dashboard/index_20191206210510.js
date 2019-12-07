import React, { useState, useMemo, useEffect } from 'react';
import { format, subDays, addDays, setHours, setMinutes, setSeconds, isBefore, isEqual, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';

import { Container, Time } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
    const [schedule, setSchedule] = useState([]);
    const [date, setDate] = useState(new Date());

    const dateFormatted = useMemo(
        () => format(date, "d, 'dia' MMMM", { locale: pt }),
        [date]
    );

    useEffect(() => {
        async function loadSchadule() {
            const response = api.get('schedule', {
                params: { date },
            });

            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            const data = range.map(hour => {
                const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0),
                const compareDate = utcToZonedTime(checkDate, timezone);

                return {
                    time: `${hour}:00h`,
                    past: isBefore(compareDate, new Date()),
                    appointment: response.data.find(a =>
                        isEqual(parseISO(a.date), compareDate),
                    )
                };
            });
            setSchedule()
        }
        loadSchadule();
    }, [date]);

    function handlePrevDay() {
        setDate(subDays(date, 1));
    }

    function handleNextDay() {
        setDate(addDays(date, 1));
    }

    return (
        <Container>
            <header>
                <button type="button" onClick={handlePrevDay}>
                    <MdChevronLeft size={36} color="#fff" />
                </button>
                <button type="button" onClick={handleNextDay}>
                    <strong> {dateFormatted} </strong>
                    <MdChevronRight size={36} color="#fff" />
                </button>
            </header>

            <ul>
                { schedule.map(time => (
                    <Time key={time.time} past={time.past} available={!time.appointment}>
                        <strong> { time.time } </strong>
                        <span> { time.appointment ? time.appointment.user.name : 'Horario disponivel' } </span>
                    </Time>
                )) }
            </ul>
        </Container>
    );
}
