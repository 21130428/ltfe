import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Sort.scss"

const Sort = () => {
    // const dispatch = useDispatch();
    // const sortOrder = useSelector(state => state.products.sortOrder); // Lấy giá trị sortOrder từ state
    //
    // const handleSortChange = (e) => {
    //     dispatch(setSortOrder(e.target.value)); // Gửi action để cập nhật sortOrder
    // };

    return (
        <div className="sort-filter">
            <h4>Sắp Xếp Theo:</h4>
            {/*<select value={sortOrder} onChange={handleSortChange}>*/}
            <select>
                    <option value="asc">Giá: Thấp đến Cao</option>
                    <option value="desc">Giá: Cao đến Thấp</option>
                </select>
        </div>
);
};

export default Sort;