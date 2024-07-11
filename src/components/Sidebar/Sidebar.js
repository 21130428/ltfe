import React from "react";
import "./Sidebar.scss"
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {getSidebarStatus, setSidebarOff, setSidebarOn} from "../../store/sidebarSlice";

const Sidebar = ()=>{
    const dispatch = useDispatch();
    const isSidebarOn = useSelector(getSidebarStatus)
    return(
        <aside className={`sidebar ${ isSidebarOn ?'hide-sidebar' : ""}`}>
            <button type= "button"className='sidebar-hiden-btn' onClick={()=>dispatch(setSidebarOff())}>
                <i className="fa fa-times"></i>
            </button>
            <div className='sidebar-cnt'>
                <div className='cat-title fs-17 text-uppercase fw-6 ls-1h'>
                    Tất cả danh mục
                </div>
                <ul className='cat-list'>
                    <li><Link to="" className='cat-list-link text-capitalize'>ÁO ĐỒNG PHỤC</Link> </li>
                </ul>
            </div>
        </aside>

    )

}