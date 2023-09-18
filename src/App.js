import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
// import Header from "./components/Header/Header";
// import Container from "./components/Container/Container";
// import Footer from "./components/Footer/Footer";
import { Container } from "./components/index";
import { Header, Footer } from "./Sections/index";
import { Home, Profile , Details ,Browse, Streams  } from "./Pages/Index";

const App = () => {
    return (
        <>
        {/* <Router  basename={/react}/>   on use  basename quand on upload site web in https://oussama.net/react */}
            <Router basename={'/React-CYBROG'}>
                <Header />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/Details" element={<Details/>}/>
                        <Route path="/Browse" element={<Browse/>}/>
                        <Route path="/Streams" element={<Streams/>}/>
                    </Routes>
                </Container>
                <Footer />  
            </Router>
        </>
    );
};
export default App;
