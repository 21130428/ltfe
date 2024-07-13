import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer bg-blue'>
            <div className = "container py-4 text-center">
                <div className='flex align-center justify-center text-white fw-3 fs-14'>
                    <Link to = "/" className='text-uppercase'>chính sách bảo mật</Link>
                    <div className='vert-line'></div>
                    <Link to = "/" className='text-uppercase'>điều khoản</Link>
                    <div className='vert-line'></div>
                    <Link to = "/" className='text-uppercase'>giới thiệu.</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer