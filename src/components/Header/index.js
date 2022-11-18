import React from 'react';
import {Wrapper, ButtonCalendar, Logo, WrapperText, Text} from "./style"

export const Header = () => {
    return (
        <Wrapper>
            <Logo>
                СНО
            </Logo>
            <WrapperText>
                <Text maxWidth="200px">
                    Учредительная документы
                </Text>
                <Text maxWidth="140px">
                    Состав СНО
                </Text>
                <Text maxWidth="140px">
                    Сборник трудов
                </Text>
                <ButtonCalendar maxWidth="100px">
                    Расписание мероприятий
                </ButtonCalendar>
            </WrapperText>
        </Wrapper>
    );
};
