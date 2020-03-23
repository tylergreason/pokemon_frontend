import React, { Component } from 'react'
import PokemonCardSmall from './PokemonCardSmall'
import Pokemon from './Pokemon'

export default class TeamCardLarge extends Component {
    state={
        team:this.props.team,
        pokemons:[]
    }

    removePokemonFromTeam = (selectedPokemon) => {
        const newTeam = this.state.team.pokemons.filter(pokemon => pokemon.id !== selectedPokemon.id)
        this.setState({team: {... this.state.team, pokemons:newTeam}})
    }

    checkIfPokemonIsOnTeam = (pokemon,team) => {
        if (team.pokemons.filter(clickedPokemon => clickedPokemon.id === pokemon.id).length > 0){
            return true
        }else{
            return false
        }   
    }

    addPokemonToTeam = (pokemon) =>{
        const newTeam = [... this.state.team.pokemons,pokemon]
        this.state.team.pokemons.length <6 && this.checkIfPokemonIsOnTeam(pokemon,this.state.team) === false
        ?
        // console.log(this.state.team.pokemons.length) 
        this.setState({
            team: {... this.state.team, pokemons: newTeam}
        })
        :
        // console.log(this.state.team.pokemons.length)
        alert('there are too many Pokemon on the team or that Pokemon is already on the team!')
    }

    renderTeamPokemons = (pokemons) => {
        return pokemons.map(pokemon => {
            return <PokemonCardSmall pokemon={pokemon} key={pokemon.id} handleClick={this.removePokemonFromTeam}/>
        })
    }

    renderAvailablePokemon = (pokemons) => {
        return pokemons.map(pokemon => {
            return <PokemonCardSmall pokemon={pokemon} key={pokemon.id} handleClick={this.addPokemonToTeam}/>
        })
    }

    // fetch all pokemon and render them in a div 
    componentDidMount = () =>{ 
        fetch('http://localhost:3000/pokemons', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.auth_token
            }
            })
        .then(resp => resp.json())
        .then(data => {
            return this.setState({
                pokemons:data
            })
        })
    }


    render(){
        {console.log(this.props)}
        return (
                <>
                    <h1>{this.props.team.name}</h1>
                    <button onClick={this.props.backClick}>Back To Teams</button>
                    <h3>{this.props.team.description}</h3>
                    <h3>Current Pocket Monsters:</h3>
                    {this.renderTeamPokemons(this.state.team.pokemons)}
                    <h3>Other Pocket Monsters:</h3>
                    {this.renderAvailablePokemon(this.state.pokemons)}
                </>
            )
        }
}