import './App.css';
import {MainPage, Docs, Works, Events, Group} from "./components";
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={
                    <MainPage/>
                }/>

                <Route path="/founding-documents" exact element={
                    <Docs/>
                }/>

                <Route path="/group-sno" exact element={
                    <Group/>
                }/>

                <Route path="/collected-works" exact element={
                    <Works/>
                }/>

                <Route path="event-calendar" exact element={
                    <Events/>
                }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
