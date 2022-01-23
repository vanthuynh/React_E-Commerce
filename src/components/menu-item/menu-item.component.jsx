import React from 'react'

import './menu-item.styles.scss';

// destructuring title is just like pass props as parameter and do props.title
const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div 
            className='background-image' 
            style={{ // add style property that can add style directly
                // this is Javascript template string
                backgroundImage: `url(${imageUrl})`
            }}  
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;