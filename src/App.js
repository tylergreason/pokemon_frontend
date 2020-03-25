import React from 'react';
import { Grid } from 'semantic-ui-react'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 
// import Pokemon from './components/Pokemon'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import CheckLogin from './Auth/CheckLogin'
import MyTeams from './containers/MyTeams'
import PokemonCardSmall from './components/Pokemon'


class App extends React.Component{
  
  handleLogin = () => {
    this.setState({ logged_in: true })
  }

  handleLogout = () => {
    // clear local storage
    localStorage.clear()
    this.setState({logged_in:false})
  }

  renderListPokemonCardSmall = (pokemons) => {
    return <Grid container columns={3}>

    {pokemons.map(pokemon => {
      return <Grid.Column>
        <PokemonCardSmall pokemon={pokemon}/>
      </Grid.Column>
    })}
    </Grid>
  }
  
  render(){
    return (  
      <Router>
      {/* render header here so it shows up everywhere */}
      <Switch>
        
        <Route exact path="/" component={() =>{
          return <CheckLogin component={MyTeams}/>
        }} />
          
          <Route path="/myteams" component={() =>{
          return <CheckLogin component={
            <MyTeams 
            renderListPokemonCardSmall={this.renderListPokemonCardSmall}
          />
          }/>
        }} />


        {/* <Route path="/myteams" component = {() =>{
          return <MyTeams 
            renderListPokemonCardSmall={this.renderListPokemonCardSmall}
          />
        }} /> */}
        
        <Route exact path="/logout" component={()=> {
          this.handleLogout()
          return <Redirect to="/login" />
        }}/>

        {/* <Route path="/pokemon" component={()=>{
          return <Pokemon />
        }}>
        </Route> */}

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
