import React from 'react';
import {Wrapper, ButtonCalendar, Logo, WrapperText, Text, Link} from "./style"

export const Header = () => {
    return (
        <Wrapper>
            <Logo href="/">
                СНО
            </Logo>
            <WrapperText>
                <Text>
                    <Link href="/founding-documents"> Учред документы
                    </Link>
                </Text>
                <Text>
                    <Link href="/group-sno"> Состав СНО
                    </Link>
                </Text>
                <Text>
                    <Link href="/collected-works"> Сборник трудов
                    </Link>
                </Text>
                <ButtonCalendar href="/event-calendar"
                                maxWidth="100px">
                    Расписание мероприятий
                </ButtonCalendar>
            </WrapperText>
        </Wrapper>
    );
};
