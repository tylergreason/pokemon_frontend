import React, { Component } from 'react' 
import { withRouter } from 'react-router';

class Signup extends Component {
    state = {
        email:'',
        password:'',
        confirmPassword:''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.password === this.state.confirmPassword){
            
            fetch('http://localhost:3000/signup',{
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
        }else{
            alert('passwords must be identical!')
        }
    }

    render(){
        console.log(this.props)
        return (
            <span className={'form-outer'}>
            <h2> Sign Up </h2>
            <form className={'add-book'} onSubmit={this.handleSubmit}>
                <input type="text" name='email' placeholder="Email" onChange={this.handleInput} value={this.state.email} />
                <br></br>
                <input type="password" name='password' placeholder="password" onChange={this.handleInput} value={this.state.password} />
                <br></br>
                <input type="password" name='confirmPassword' placeholder="confirm password" onChange={this.handleInput} value={this.state.confirmPassword} />
                <br></br>
                <input id="submit" type="submit" value="Submit" />
            </form>
        </span>
        ) 
    }
}
export default withRouter(Signup)