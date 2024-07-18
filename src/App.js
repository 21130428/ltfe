import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./components/CartModel/CartModel"
import Sidebar from "./components/Sidebar/Sidebar";
import Menu from "./components/Menu/Menu";
import Home from "./pages/HomePage/HomePage";
import Search from "./pages/SearchPage/SearchPage";
import CategoryProduct from "./pages/CategoryProductPage/CategoryProductPage";
import ProductSingle from "./pages/ProductSinglePage/ProductSinglePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CartPage from "./pages/CartPage/CartPage";

import store from "./store/store";
import {Provider} from "react-redux";
function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <Sidebar/>
                    <Menu/>
                    <Routes>
                        <Route path = "/" element={<Home/>}/>
                        <Route path = "/product/:id" element = {<ProductSingle />} />
                        <Route path = "/category/:category" element = {<CategoryProduct />} />
                        <Route path = "/ProductsPage" element={<ProductsPage/>}/>
                        <Route path = "/cart" element = {<CartPage />} />
                        <Route path = "/search/:searchTerm" element = {<Search />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
