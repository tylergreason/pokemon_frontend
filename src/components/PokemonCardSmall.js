import React, { Component } from 'react' 

// const PokemonCardSmall = (props) => {
class PokemonCardSmall extends Component {

    renderAttributes = (attributes) => {
        return attributes.map(attribute => <label>{attribute.name}</label>)
        // return attributes.map(attribute => <li>{attribute.name}</li>)
    }

    render (){
        console.log(this.props)
        return(
        <div style={{border: '5px solid black'}}>
            <h3>{this.props.pokemon.name}</h3>
            <img src={this.props.pokemon.image_url}/>
            <p>Types: </p>
            <ul>{this.renderAttributes(this.props.pokemon.types)}</ul>
            <p>Moves: </p>
            <ul>{this.renderAttributes(this.props.pokemon.active_moves)}</ul>
        </div>
        )
    }
}

export default PokemonCardSmall