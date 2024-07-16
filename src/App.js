import React from 'react';
import './App.scss';
import Sidebar from "./components/Slider/HeaderSlider"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import Header from "./components/Header/Header";
import Menu from './components/Menu/Menu';
//pages
import Home from "./pages/HomePage/HomePage"

import store from "./store/store";

import {Provider} from "react-redux";
function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <Menu/>
                    <Sidebar/>
                    <Routes>
                        <Route path = "/" element={<Home/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
