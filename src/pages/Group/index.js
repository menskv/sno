import React from 'react';
import {Container, Main} from "../../common/commonStyle";
import {Header} from "../../components";
import {Footer} from "../../components";
import {Wrapper} from "./style";
import {People} from "../../components";
import {mainPageController} from "../../api";

export const Group = () => {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        mainPageController.getMembers().then(res => res.data).then((data) => setData(data))
    }, [])
    return (
        <Main>
            <Container>
                <Header/>
                <Wrapper>
                    <div>
                        {
                            data?.map((user) => (
                                <div key={user?.id}>
                                    <People user={user}/>
                                </div>
                            ))
                        }
                    </div>
                </Wrapper>
            </Container>
            <Footer/>

        </Main>
    );
};
