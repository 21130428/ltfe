// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss'; // import CSS file for styling

const Menu = () => {
    return (
        <nav className="menu">
            <ul className="menu-list">
                <li className="menu-item">
                    <Link to="/">Trang Chủ</Link>
                </li>
                <li className="menu-item">
                    <Link to="/ProductsPage">Sản Phẩm</Link>
                </li>
                <li className="menu-item">
                    <Link to="/aboutus">Về Chúng Tôi</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
