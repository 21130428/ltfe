import React,{useEffect} from "react";
import "./HomePage.scss";
import HeaderSlider from "../../components/Slider/HeaderSlider";
import {useSelector,useDispatch} from "react-redux";
import {getAllCategories} from "../../store/categorySlice";
import ProductList from "../../components/ProductList/ProductList";
import {fetchAsyncProducts, getAllProducts, getAllProductsStatus} from "../../store/productSlice";
import Loader from "../../components/Loader/Loader";
import {STATUS} from "../../utils/status";
const HomePage = () =>{
    const dispatch = useDispatch();
    const categories = useSelector(getAllCategories);

    useEffect(()=>{
        console.log("Dispatching fetchAsyncProducts");
        dispatch(fetchAsyncProducts(50))
    },[]);
    const products = useSelector(getAllProducts);
    console.log(products);
    const productStatus = useSelector(getAllProductsStatus);
    return (
        <main>
            <div className='slider-wrapper'>
                <HeaderSlider/>
            </div>
            <div className='main-content bg-whitesmoke'>
                <div className='container'>
                    <div className='categories py-5'>
                        <div className='categories-item'>
                            <div className='title-md'>
                                <h3>Sản phẩm mới nhất</h3>
                            </div>
                            {productStatus === STATUS.LOADING ? <Loader/> :<ProductList products={products}/>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default HomePage;