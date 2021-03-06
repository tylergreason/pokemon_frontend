import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import TeamCard from '../components/TeamCard'
import PokemonCardSmall from '../components/PokemonCardSmall'
import TeamCardLarge from '../components/TeamCardLarge'
const MYTEAMS = "http://localhost:3000/myteams"

export default class MyTeam extends Component {
    state = {
        teams:[],
        selectedTeam:null
    }

    fetchTeams = () => {
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

    componentDidMount = () => {
        this.fetchTeams()
    }

    renderListPokemonCardSmall = (pokemons) => {
        return <Grid container columns={6}>
    
        {pokemons.map(pokemon => {
          return <Grid.Column>
            <PokemonCardSmall 
                pokemon={pokemon} 
                key={pokemon.id} 
                handleClick={this.pokemonCardClick}
            />
          </Grid.Column>
        })}
        </Grid>
      }
    // placeholder function for pokemon card clicks 
    pokemonCardClick = (pokemon => console.log(pokemon))
    // pokemonCardClick = (pokemon => console.log('bleh'))

    renderTeamCards = () => {
        return this.state.teams.map(team => <TeamCard 
                team={team} 
                key={team.id}
                renderListPokemonCardSmall={this.renderListPokemonCardSmall}
                teamCardClick={this.teamCardClick}
                
        />)
    }

    renderTeamCardLarge = (team) =>{
        return <TeamCardLarge 
            team={team}
            backClick={this.returnToTeamList}
            renderListPokemonCardSmall={this.renderListPokemonCardSmall}
        />
    }


    returnToTeamList = () => {
        this.setState({
            selectedTeam:null
        })
        this.fetchTeams()
    }

    teamCardClick = (team) => {
        this.setState({
            selectedTeam:team
        })
    }

    render(){
        return(
            <>
            {this.state.selectedTeam !== null 
            ? 
                this.renderTeamCardLarge(this.state.selectedTeam)
            : 
                this.renderTeamCards()
            }
            {/* {this.renderTeamCards()} */}
            </>
        )
    }
}