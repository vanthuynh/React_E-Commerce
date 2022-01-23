import React from 'react';
import { withRouter} from 'react-router-dom';

import './menu-item.styles.scss';

// destructuring title is just like pass props as parameter and do props.title
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div 
        className={`${size} menu-item`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

// withRouter is a High-Order Component that can power up component
// this case MenuItem is powered up and have access to 'history'
export default withRouter(MenuItem);