import React from 'react'; 
import { Redirect } from 'react-router-dom'

const handleReturn = (props) => {
    if(localStorage.getItem('auth_token')){
        return <props.component /> 
    }else{
        return <Redirect to='/login' />
    }
}

const CheckLogin =(props) => {
    return (
        <>
        { handleReturn(props) }
        </>
    )
}

export default CheckLogin;