import React, {useEffect} from 'react';
import "./SearchPage.scss";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { STATUS } from '../../utils/status';
import Loader from '../../components/Loader/Loader';
import ProductList from '../../components/ProductList/ProductList';
import { fetchAsyncSearchProduct, getSearchProducts, setSearchTerm, getSearchProductsStatus, clearSearch } from '../../store/searchSlice';

const SearchPage = () => {
    const dispatch = useDispatch();
    const {searchTerm } = useParams();
    const searchProducts = useSelector(getSearchProducts);
    const searchProductsStatus = useSelector(getSearchProductsStatus);

    useEffect(() => {
        dispatch(clearSearch());
        dispatch(fetchAsyncSearchProduct(searchTerm));
    }, [searchTerm]);

    if(searchProducts.length === 0){
        return (
            <div className='container'>
                <div className='not-found fw-5 text-danger py-5'>
                    <h3>Không có thông tin sản phẩm.</h3>
                </div>
            </div>
        )
    }

    return (
        <main>
            <div className='search-content bg-whitesmoke'>
                <div className='container'>
                    <div className='founded py-5'>
                        <div className='title-md'>
                            <h3>Kết quả tìm kiếm:</h3>
                        </div>
                        <br />
                        {
                            searchProductsStatus === STATUS.LOADING ? <Loader /> : <ProductList products = {searchProducts} />
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SearchPage;