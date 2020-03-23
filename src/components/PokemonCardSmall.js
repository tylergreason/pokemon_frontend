import React, { Component } from 'react' 

// const PokemonCardSmall = (props) => {
class PokemonCardSmall extends Component {

    renderAttributes = (attributes) => {
        return attributes.map(attribute => <label>{attribute.name} /</label>)
        // return attributes.map(attribute => <li>{attribute.name}</li>)
    }

    render (){
        console.log(this.props)
        return(
        <>
            <h3>{this.props.pokemon.name}</h3>
            <p>Types: </p>
            <ul>{this.renderAttributes(this.props.pokemon.types)}</ul>
            <p>Moves: </p>
            <ul>{this.renderAttributes(this.props.pokemon.active_moves)}</ul>
        </>
        )
    }
}

export default PokemonCardSmall