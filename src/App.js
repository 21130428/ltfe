import React from 'react';
import './App.scss';
import Sidebar from "./components/Slider/HeaderSlider"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage/HomePage"
import store from "./store/store";
import {Provider} from "react-redux";
function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <Sidebar/>
                    <Routes>
                        <Route path = "/" element={<Home/>}/>
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
