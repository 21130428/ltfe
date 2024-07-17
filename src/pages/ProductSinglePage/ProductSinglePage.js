import React, {useEffect, useState} from 'react';
import "./ProductSinglePage.scss";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {
    fetchAsyncProductSingle,
    getProductSingle,
    getProductSingleStatus,
    getSingleProductStatus
} from '../../store/productSlice';
import { STATUS } from '../../utils/status';
import Loader from "../../components/Loader/Loader";
import {formatPrice} from "../../utils/helpers";

const ProductSinglePage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const product = useSelector(getProductSingle);
    const productSingleStatus = useSelector(getProductSingleStatus);

    useEffect(() =>{
        dispatch(fetchAsyncProductSingle(id))
    }, []);

    let discountedPrice = (product?.price) - (product?.price * (product?.discountPercentage / 100))

    if(productSingleStatus === STATUS.LOADING) {
        return <Loader />
    }

    return(
        <main className='py-5 bg-whitesmoke'>
            <div className='product-single'>
                <div className='container'>
                    <div className='product-single-content bg-white grid'>
                        <div className='product-single-l'>
                            <div className='product-img'>
                                <div className='product-img-zoom'>
                                    <img src={(product.images ? product.images[0] : "")} alt="" className='img-cover'/>
                                </div>
                                <div className='product-img-thumbs flex align-center my-2'>
                                    <div className='thumb-item'>
                                        <img src={
                                            product ? (product.images ? product.images[1] : "") : ""
                                        } alt="" className='img-cover'/>
                                    </div>
                                    <div className='thumb-item'>
                                        <img src={
                                            product ? (product.images ? product.images[2] : "") : ""
                                        } alt="" className='img-cover'/>
                                    </div>
                                    <div className='thumb-item'>
                                        <img src={
                                            product ? (product.images ? product.images[3] : "") : ""
                                        } alt="" className='img-cover'/>
                                    </div>
                                    <div className='thumb-item'>
                                        <img src={
                                            product ? (product.images ? product.images[4] : "") : ""
                                        } alt="" className='img-cover'/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='product-single-r'>
                            <div className='product-details font-manrope'>
                                <div className='title fs-20 fw-5'>
                                    {product?.title}
                                </div>
                                <div>
                                    <p className='para fw-3 fs-15'>
                                        {product?.description}
                                    </p>
                                </div>
                                <div className='info flex align-center flex-wrap fs-14'>
                                    <div className='rating'>
                                        <span className='text-orange fw-5'>Đánh giá: </span>
                                        <span className='mx1'>
                                            {product?.rating}
                                        </span>
                                        <i className="fa-solid fa-star text-yellow"></i>
                                    </div>
                                    <div className='vert-line'></div>
                                    <div className='brand'>
                                        <span className='text-orange fw-5'>Thương hiệu: </span>
                                        <span className='mx1'>
                                            {product?.brand}
                                        </span>
                                    </div>
                                    <div className='vert-line'></div>
                                    <div className='category'>
                                        <span className='text-orange fw-5'>Danh mục: </span>
                                        <span className='mx1'>
                                            {product?.category ? product.category.replace("-"," ") :  ""}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default ProductSinglePage;