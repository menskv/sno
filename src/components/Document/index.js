import React from 'react';
import {Content, Description, Download, Icon, Title, Wrapper, Button} from "./style";
import {useNavigate} from "react-router";

export const Document = (props) => {
    const {docs} = props
    const navigate = useNavigate();
    const handleOnClick = () => navigate("http://178.20.44.175:8005/media/docs/sample.pdf")
    return (
        <Wrapper>
            <Content>
                <Title>
                    {docs?.name}
                </Title>
                <Description>
                    {docs?.file}
                </Description>
            </Content>

            <Download>
                <Icon>
                </Icon>
                <Button target="_blank" onClick={handleOnClick}>Скачать</Button>
            </Download>
        </Wrapper>
    );
};
