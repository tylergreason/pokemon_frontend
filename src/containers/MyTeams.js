import React, { Component } from 'react'
import TeamCard from '../components/TeamCard'
import PokemonCardSmall from '../components/PokemonCardSmall'
const MYTEAMS = "http://localhost:3000/myteams"

export default class MyTeam extends Component {
    state = {
        teams:[]
    }

    componentDidMount = () => {
        fetch(MYTEAMS, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Token': localStorage.auth_token
        }
        })
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)
            this.setState({teams:data});
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    renderListPokemonCardSmall = (pokemons) => {
        return pokemons.map(pokemon => {
            return <PokemonCardSmall pokemon={pokemon}/>
        })
    }

    renderTeamCards = () => {
        return this.state.teams.map(team => <TeamCard 
                team={team} 
                key={team.id}
                renderListPokemonCardSmall={this.renderListPokemonCardSmall}
            />)
    }
    render(){
        return(
            
            <>
            {this.renderTeamCards()}
            </>
        )
    }
}