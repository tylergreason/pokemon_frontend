import React, { Component } from 'react'
import MoveCard from './MoveCard' 

class EditPokemon extends Component {
    state = {
        pokemon:this.props.pokemon,
        activeMoves: this.props.pokemon.active_moves,
        moves:this.props.pokemon.moves,
        nonActiveMoves:this.props.pokemon.non_active_moves
    }

    componentDidUpdate=(prevProps)=>{
        if (prevProps !== this.props){
            this.setState({
                pokemon:this.props.pokemon,
                activeMoves: this.props.pokemon.active_moves,
                moves:this.props.pokemon.moves,
                nonActiveMoves:this.props.pokemon.non_active_moves
            })
        }
    }
    renderAttributes = (attributes) => {
        return attributes.map(attribute => <label key={attribute.id}>{attribute.name}/</label>)
    }

    renderActiveMoves = (moves) => {
        return moves.map(move => <MoveCard 
                move={move} 
                handleClick={this.handleActiveMoveClick}
                key={`${move.id}`}
            />)
    }

    renderNonActiveMoves = (moves) => {
        // filter for moves that aren't in the active move list 

        return moves.map(move => <MoveCard 
                move={move} 
                handleClick={this.handleNonActiveMoveClick}
                key={move.id}
            />)
    }

    handleActiveMoveClick = (move) =>{
        const newActiveMoves = this.state.activeMoves.filter(filterMove => filterMove.id !== move.id)
        console.log(newActiveMoves)
        this.setState({
            activeMoves:newActiveMoves
        })
    }

    // function for if the active moves are at the 4 move max 
    activeMovesAtMax = () => {
        return (this.state.activeMoves.length >= 4)
        ?
        true
        // console.log(this.state.activeMoves.length)
        :
        false
    }

    // function to check if one move is in a list of moves 
    moveIsActive = (move) => {
        const list = this.state.activeMoves; 
        return list.filter(filterMove => filterMove.id === move.id).length > 0 
        ? 
        true
        : 
        false 
    }

    handleNonActiveMoveClick = (move) =>{
        // add this move to active moves if it meets the requirements
        if (this.activeMovesAtMax()){
            console.log('This Pokemon already has four moves!')
            return null 
        }else if (this.moveIsActive(move)){
            console.log('that move is already active!')
        }else{
            this.setState({
                activeMoves:[... this.state.activeMoves, move]
            })
        }
    }

    submitPokemon = () => {
        const data = this.state; 
        const URL = `http://localhost:3000/pokemons/${this.state.pokemon.id}`
        fetch(URL, {
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.auth_token
            }, 
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(data => {
            // console.log(data)
            this.setState({
                pokemon:data
            })
        })

    }

    // buttons for adding or editing pokemon 
    renderAddOrRemoveButton = () => {
        if (this.props.checkIfPokemonIsOnTeam(this.props.pokemon)){
            return <button onClick={() => this.props.removePokemonFromTeam(this.props.pokemon)}>Remove from Team</button>
        }else{
            return <button onClick={() => this.props.addPokemonToTeam(this.props.pokemon)}>Add to Team</button>
        }
    }
    render(){
        return(
            <div>
                <h3>{this.props.pokemon.name}</h3>
                <img src={this.props.pokemon.image_url}/>
                <p>Types: </p>
                <React.Fragment>{this.renderAttributes(this.props.pokemon.types)}</React.Fragment>
                {this.renderAddOrRemoveButton()}
                <button onClick={this.submitPokemon}>Submit Changes</button>
                <p>Current Moves:</p>
                <React.Fragment>{this.renderActiveMoves(this.state.activeMoves)}</React.Fragment>
                <p>Available Moves:</p>
                <React.Fragment>{this.renderNonActiveMoves(this.state.nonActiveMoves)}</React.Fragment>
            </div>
        )
    }
}

export default EditPokemon