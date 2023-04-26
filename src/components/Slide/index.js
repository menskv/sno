import React from 'react';
import {Wrapper, Content, Description, Title} from "./style";

export const Slide = (props) => {
    const {banner} = props
    return (
        <Wrapper>
                <img src={banner?.photo} alt="картинка"/>
            <Content>
                <Title>
                    {banner?.title}
                </Title>
                <Description>
                    {banner?.summary}
                </Description>

            </Content>
        </Wrapper>
    );
};
