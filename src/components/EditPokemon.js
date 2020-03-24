import React, { Component } from 'react'
import MoveCard from './MoveCard' 

class EditPokemon extends Component {
    renderAttributes = (attributes) => {
        return attributes.map(attribute => <label >{attribute.name}/</label>)
    }

    renderActiveMoves = (moves) => {
        return moves.map(move => <MoveCard move={move}/>)
    }

    renderNonActiveMoves = (moves) => {
        return moves.map(move => <MoveCard move={move}/>)
    }

    render(){
        return(
            <div>
                <h3>{this.props.pokemon.name}</h3>
                <img src={this.props.pokemon.image_url}/>
                <p>Types: </p>
                <React.Fragment>{this.renderAttributes(this.props.pokemon.types)}</React.Fragment>
                <p>Current Moves:</p>
                <React.Fragment>{this.renderActiveMoves(this.props.pokemon.active_moves)}</React.Fragment>
                <p>Available Moves:</p>
                <React.Fragment>{this.renderNonActiveMoves(this.props.pokemon.moves)}</React.Fragment>
            </div>
        )
    }
}

export default EditPokemon