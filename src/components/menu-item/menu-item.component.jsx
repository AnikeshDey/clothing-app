import React from "react";
import { useNavigate } from 'react-router-dom';

import './menu-item.styles.scss'

const MenuItem = (props) => {
    const navigate = useNavigate();
    return (
        <div className={`${props.size} menu-item`}>
            <div style={{
            backgroundImage: `url(${props.imgUrl})`
            }} 
            className='background-image' />
            <div className='content'>
                <h1 className='title'>{ props.title }</h1>
                <span onClick={() => navigate(props.linkUrl)} className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}
    


export default MenuItem;