import React from 'react';
import {Header} from "../Header";
import {Container, Main} from "../../common/commonStyle";
import {Title, Text, TitleWrapper} from "./style"
import 'swiper/css';
import 'swiper/swiper-bundle.css'
import {Swiper} from "swiper";
import {SwiperSlide} from "swiper/react";
    const slides = [];
    for (let i = 0; i < 5; i += 1) {
        slides.push(
            <SwiperSlide key={`slides-${i}`}>
                <img src={`https://picsum.photos/id/${i+1}/500/300`}
                    alt={`slide ${i}`}/>
            </SwiperSlide>
        )
    }
export const MainPage = () => {
    return (
        <Container>
            <Header/>
            <Main>
                <TitleWrapper>
                    <Title>
                        Студенческое Научное Общество
                    </Title>
                    <Text>
                        При владимирском государственном университете
                        имени Александра Григорьевича и Николая Григорьевича Столетовых
                    </Text>
                </TitleWrapper>
                <Swiper id="main">{slides}</Swiper>
        </Main>
</Container>
)
    ;
};
