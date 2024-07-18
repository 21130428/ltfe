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
    const [quantity, setQuantity] = useState(1);

    useEffect(() =>{
        dispatch(fetchAsyncProductSingle(id))
    }, []);

    let discountedPrice = (product?.price) - (product?.price * (product?.discountedPercentage / 100))

    if(productSingleStatus === STATUS.LOADING) {
        return <Loader />
    }
    const increaseQty = () => {
        setQuantity((prevQty) => {
            let tempQty = prevQty + 1;
            if(tempQty > product?.stock) tempQty = product?.stock;
            return tempQty;
        })
    }

    const decreaseQty = () => {
        setQuantity((prevQty) => {
            let tempQty = prevQty - 1;
            if(tempQty < 1) tempQty = 1;
            return tempQty;
        })
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
                                    <div className='fs-20 fw-5 text-orange'>
                                        Mô tả:
                                    </div>
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
                                            {product?.category ? product.category : ""}
                                        </span>
                                    </div>
                                </div>
                                <div className="price">
                                    <div className='flex align-center'>
                                        <div className='old-price text-gray'>
                                            {formatPrice(product?.price)}
                                        </div>
                                    </div>
                                    <div className='flex align-center my-1'>
                                        <div className='new-price fw-5 font-poppins fs-24 text-orange'>
                                            {formatPrice(discountedPrice)}
                                        </div>
                                        <div className='discount bg-orange fs-13 text-white fw-6 font-poppins'>
                                            giảm {product?.discountedPercentage}%
                                        </div>
                                    </div>
                                </div>
                                <div className='qty flex align-center my-4'>
                                    <div className='qty-text'>Số lượng:</div>
                                    <div className='qty-change flex align-center mx-3'>
                                        <button type="button" className='qty-decrease flex align-center justify-center'
                                                onClick={() => decreaseQty()}>
                                            <i className='fas fa-minus'></i>
                                        </button>
                                        <div className="qty-value flex align-center justify-center">{quantity}</div>
                                        <button type="button" className='qty-increase flex align-center justify-center'
                                                onClick={() => increaseQty()}>
                                            <i className='fas fa-plus'></i>
                                        </button>
                                    </div>
                                </div>
                                <div className='btns'>
                                    <button type="button" className='add-to-cart-btn btn'>
                                        <i className='fas fa-shopping-cart'></i>
                                        <span className='btn-text mx-2'>Thêm vào giỏ hàng</span>
                                    </button>
                                    <button type="button" className='buy-now btn mx-3'>
                                        <span className='btn-text'>Mua ngay</span>
                                    </button>
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