import React from 'react';
import {Header} from "../../components/Header";
import {Container, Main} from "../../common/commonStyle";
import {Title, Text, TitleWrapper} from "./style"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import {SwiperSlide, Swiper} from "swiper/react";
import {About, Footer} from "../../components";
import {mainPageController} from "../../api";
import {Slide} from "../../components/Slide";


export const MainPage = () => {
    const [data, setData] = React.useState({})
    React.useEffect(() => {
        mainPageController.getPhotos().then(res => res.data).then((data) => setData(data))
    }, [])
    return (
        <Main>
            <Container>
                <Header/>
                <TitleWrapper>
                    <Title>
                        Студенческое Научное Общество
                    </Title>
                    <Text>
                        При владимирском государственном университете
                        имени Александра Григорьевича и Николая Григорьевича Столетовых
                    </Text>
                </TitleWrapper>
                <Swiper
                        pagination={{clickable: true}}
                        id="main"
                        slidesPerView={3}
                >
                    {
                        data?.data?.map((banner) => (
                            <SwiperSlide key={banner?.id}>
                                <Slide banner={banner}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Container>
            <About/>
            <Footer/>
        </Main>
    );
};
