import React, { Component } from 'react' 
import { withRouter } from 'react-router';

class Login extends Component {
    state = {
        email:'',
        password:''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    
        fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: this.state })
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('auth_token',data.token)
            this.props.handleLogin()
            this.props.history.push('/pokemon')
        })
    }

    render(){
        console.log(this.props)
        return (
            <span className={'form-outer'}>
            <h2> Login </h2>
            <form className={'add-book'} onSubmit={this.handleSubmit}>
                <input type="text" name='email' placeholder="Email" onChange={this.handleInput} value={this.state.email} />
                <input type="password" name='password' placeholder="password" onChange={this.handleInput} value={this.state.password} />
                <input id="submit" type="submit" value="Submit" />
            </form>
        </span>
        ) 
    }
}
export default withRouter(Login)