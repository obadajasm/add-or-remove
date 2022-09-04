import React from 'react'
import PropTypes from 'prop-types';

export const Button = ({ title, onClick, disabled }) => {
    return (
        <button style={{ margin: '4px' }} disabled={disabled} onClick={onClick} >{title}</button>
    )
}

Button.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default Button;