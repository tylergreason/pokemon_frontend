import React from 'react' 
import { render } from '@testing-library/react'

const CustomButton = (props) => {
    return(
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

export default CustomButton 