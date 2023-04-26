import React from 'react';
import {Img, Text, Title, WrapperBlock} from "./style";

export const People = (props) => {
    const {user} = props
    return (
        <WrapperBlock>
            <Img src = {user?.photo} alt="">
            </Img>
            <Title>
                {user?.name}
            </Title>
            <Text>
                {user?.position}
            </Text>
        </WrapperBlock>
    );
};
