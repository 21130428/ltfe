import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/HomePage/HomePage";
import CategoryProduct from "./pages/CategoryProductPage/CategoryProductPage";
import ProductSingle from "./pages/ProductSinglePage/ProductSinglePage";
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
                        <Route path = "/product/:id" element = {<ProductSingle />} />
                        <Route path = "/category/:category" element = {<CategoryProduct />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
