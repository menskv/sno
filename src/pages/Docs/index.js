import React from 'react';
import {Header} from "../../components/Header";
import {Container, Main} from "../../common/commonStyle";
import {Document, Footer} from "../../components";
import {mainPageController} from "../../api";

export const Docs = () => {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        mainPageController.getDocs().then(res => res.data).then((data) => setData(data))
    }, [])
    console.log(data)
    return (
        <Main>
            <Container>
                <Header/>
                <div>
                    {
                        data?.map((docs)=>(
                            <div key={docs.id}>
                                <Document docs={docs}/>
                            </div>
                        ))
                    }
                </div>
            </Container>
            <Footer/>
        </Main>

    );
};
