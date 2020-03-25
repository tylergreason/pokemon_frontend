import React, { Component } from 'react'
import PokemonCardSmall from './PokemonCardSmall'
import EditPokemon from './EditPokemon'
import { Button } from 'semantic-ui-react'
// import Pokemon from './Pokemon'

export default class TeamCardLarge extends Component {
    state={
        team:this.props.team,
        pokemons:[],
        selectedPokemon:null
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

    removePokemonFromTeam = (selectedPokemon) => {
        const newTeam = this.state.team.pokemons.filter(pokemon => pokemon.id !== selectedPokemon.id)
        this.setState({team: {... this.state.team, pokemons:newTeam}})
    }

    checkIfPokemonIsOnTeam = (pokemon) => {
        if (this.state.team.pokemons.filter(clickedPokemon => clickedPokemon.id === pokemon.id).length > 0){
            return true
        }else{
            return false
        }   
    }

    

    addPokemonToTeam = (pokemon) =>{
        const newTeam = [... this.state.team.pokemons,pokemon]
        this.state.team.pokemons.length <6 && this.checkIfPokemonIsOnTeam(pokemon) === false
        ?
        this.setState({
            team: {... this.state.team, pokemons: newTeam}
        })
        :
        // console.log(this.state.team.pokemons.length)
        console.log('there are too many Pokemon on the team or that Pokemon is already on the team!')
    }

    renderTeamPokemons = (pokemons) => {
        return pokemons.map(pokemon => {
            return <PokemonCardSmall 
                pokemon={pokemon} 
                key={pokemon.id} 
                handleClick={()=>this.editPokemonClick(pokemon)}
            />
        })
    }

    renderAvailablePokemon = (pokemons) => {
        return pokemons.map(pokemon => {
            return <PokemonCardSmall 
                pokemon={pokemon} 
                key={pokemon.id} 
                // handleClick={this.addPokemonToTeam}
                handleClick={() => this.editPokemonClick(pokemon)}
            />
        })
    }

    editPokemonClick = (pokemon) =>{
        fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.auth_token
            }
            })
            .then(resp => resp.json())
            .then(data => this.setState({
                selectedPokemon: data
            }))
    }

    saveTeam = () =>{
        const data = this.state.team
        fetch(`http://localhost:3000/teams/${this.state.team.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.auth_token
            },
            body: JSON.stringify(data)
            })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({
                team:data
            })
        })
    }
    render(){
        console.log(this.state)
        return (
                <>
                    <h1>{this.props.team.name}</h1>
                    <Button onClick={this.props.backClick}>Back To Teams</Button>
                    <Button onClick={this.saveTeam}>Save Team</Button>
                    <h3>{this.props.team.description}</h3>
                    <h3>Current Pocket Monsters:</h3>
                    {this.renderTeamPokemons(this.state.team.pokemons)}
                    {this.state.selectedPokemon ? <EditPokemon 
                        pokemon={this.state.selectedPokemon}
                        checkIfPokemonIsOnTeam={this.checkIfPokemonIsOnTeam}
                        addPokemonToTeam={this.addPokemonToTeam}
                        removePokemonFromTeam={this.removePokemonFromTeam}

                        /> : null}
                    <h3>Other Pocket Monsters:</h3>
                    {this.renderAvailablePokemon(this.state.pokemons)}
                </>
            )
        }
}