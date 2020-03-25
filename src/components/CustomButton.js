import React from 'react' 
import { Button } from 'semantic-ui-react' 
import { render } from '@testing-library/react'

const CustomButton = (props) => {
    return(
        <Button onClick={props.handleClick}>{props.text}</Button>
    )
}

export default CustomButton 