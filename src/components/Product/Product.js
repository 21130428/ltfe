import React from 'react';
import { Link } from 'react-router-dom';
import {formatPrice} from "../../utils/helpers";
import "./Product.scss";


const Product = ({product}) => {
    return (
        <Link to = {`/product/${product?.id}`} key = {product?.id}>
            <div className='product-item bg-white'>
                <div className='category'>{product?.category}</div>
                <div className='product-item-img'>
                    <img className='img-cover' src = {product?.images[0]} alt = {product.title} />
                </div>
                <div className='product-item-info fs-14'>
                    <div className='brand'>
                        <span>Thương Hiệu: </span>
                        <span className='fw-7'>{product?.brand}</span>
                    </div>
                    <div className='title py-2 text-danger'>
                        {product?.title}
                    </div>
                    <div className='price flex align-center justify-center'>
            <span className='old-price'>
            </span>
                        <span className='new-price'>
                  {formatPrice(product?.price)}
            </span>
                        <span className='discount fw-6'>
              (-{product?.discountedPercentage}%)
            </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Product