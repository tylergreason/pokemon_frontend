import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 
import Pokemon from './components/Pokemon'


function App() {
  return (  
    <Router>
      {/* render header here so it shows up everywhere */}
      <Switch>
        <Route exact path="/" component={() => ('hello!')} />
        <Route path="/pokemon" component={()=>{
          return <Pokemon />
        }}>
          {/* <Pokemon /> */}
        </Route>
        <Route path="/login">
          <h2>login</h2>
        </Route>
        <Route path="/signup">
          <h2>signup</h2>
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

export default App;
