import React from 'react'

import './menu-item.styles.scss';

// destructuring title is just like pass props as parameter and do props.title
const MenuItem = ({ title, imageUrl, size }) => (
    <div 
        style={{ // add style property that can add style directly
            // this is Javascript template string
            backgroundImage: `url(${imageUrl})`
        }} 
        className={`${size} menu-item`}
    >
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;