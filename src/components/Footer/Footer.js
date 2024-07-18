import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';
import PrivacyPolicyPage from "../../pages/PrivacyPolicyPage/PrivacyPolicyPage";

const Footer = () => {
    return (
        <footer className='footer bg-orange'>
            <div className = "container py-4 text-center">
                <div className='flex align-center justify-center text-white fw-3 fs-14'>
                    <Link to = "/PrivacyPolicy" className='text-uppercase'>chính sách bảo mật</Link>
                    <div className='vert-line'></div>
                    <Link to = "/TermService" className='text-uppercase'>điều khoản dịch vụ</Link>
                    <div className='vert-line'></div>
                    <Link to = "/" className='text-uppercase'>Liên hệ</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer