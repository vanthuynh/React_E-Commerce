import React from 'react';

import './form-input.styles.scss';

// this will be functional component because we don't want any state on this component
const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {
            label ? 
            (<label className={`${otherProps.value.length ? 'shrink': ''} form-input-label`}>
                {label}
            </label>) 
            : null
        }
        {/* selectively render a label (in case reuse FormInput component without passing label value)*/}
    </div>
);

export default FormInput;