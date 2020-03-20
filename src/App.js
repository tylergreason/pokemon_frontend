import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 
import Pokemon from './components/Pokemon'
import Login from './Auth/Login'
import Signup from './Auth/Signup'


class App extends React.Component{
  
  handleLogin = () => {
    this.setState({ logged_in: true })
  }

  handleLogout = () => {
    // clear local storage
    localStorage.clear()
    this.setState({logged_in:false})

  }
  
  render(){
    return (  
      <Router>
      {/* render header here so it shows up everywhere */}
      <Switch>
        <Route exact path="/" component={() => ('hello!')} />
        
        <Route exact path="/logout" component={()=> {
          this.handleLogout()
          return <Redirect to="/login" />
        }}/>

        <Route path="/pokemon" component={()=>{
          return <Pokemon />
        }}>
        </Route>

        <Route path="/login" component={()=>{
          return <Login handleLogin={this.handleLogin}/>
        }}>
        </Route>
        <Route path="/signup" component={()=> {
          return <Signup handleLogin={this.handleLogin}/>
        }}>
        </Route>
        {/* <Route exact path="/login" component */}

    {/* default route if nothing matches  */}
    <Route>
      <Redirect to="/"/>
    </Route>
      </Switch>
    </Router>
  );
}
}

export default App;