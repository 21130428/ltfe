import React, {useEffect} from 'react';
import "./CategoryProductPage.scss";
import ProductList from "../../components/ProductList/ProductList";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllProductsByCategory, fetchAsyncProductsOfCategory, getCategoryProductsStatus } from '../../store/categorySlice';
import Loader from '../../components/Loader/Loader';
import { STATUS } from '../../utils/status';
import {getAllCarts,getCartItemsCount, getCartTotal} from "../../store/cartSlice";

const CategoryProductPage = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const categoryProducts = useSelector(getAllProductsByCategory);
    const categoryProductsStatus = useSelector(getCategoryProductsStatus);



    useEffect(() => {
        dispatch(fetchAsyncProductsOfCategory(category));
    }, [dispatch, category]);

    return (
        <div className='cat-products py-5 bg-whitesmoke'>
            <div className='container'>
                <div className='cat-products-content'>
                    <div className='title-md'>
                        <h3><span className='text-capitalize'>{category}</span></h3>
                    </div>

                    {
                        categoryProductsStatus === STATUS.LOADING ? <Loader /> : <ProductList products = {categoryProducts} />
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoryProductPage