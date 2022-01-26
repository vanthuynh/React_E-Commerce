import React from 'react';

import './custom-button.styles.scss'

// stateless functional component
// button can take the property of type 'submit' and trigger the onSubmit method
const CustomButton = ({ children, ...otherProps }) => (
    <button className='custom-button'{...otherProps}>
        {children}
    </button>
)

export default CustomButton;